class AdminController < ApplicationController
  def index
    @reservations = Reservation.includes(:parking_section).select(:id, :ticket_number, :vehicle_registration_number, :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, :vehicle_type, :booking_status)
  end

  def grant_access
    admin_name = session[:admin_username]
    reservation = Reservation.find_by(ticket_number: params[:ticket_number])
  
    if reservation
      park_section = ParkSection.find_by(park_status: 'VAC')
  
      if park_section
        reservation.update(
          booking_status: 'IN',
          check_in_time: Time.now.gmtime + 3.hours,
          pay_state: 'FALSE',
          check_in_admin: admin_name # Use admin_name from the session
        )
        park_section.update(park_status: 'OCC') # Change park section status from 'VAC' to 'OCC'
        message = "Vehicle successfully checked in by #{admin_name}. Please park in Park Number #{park_section.park_num}."
        render json: { message: message, allocated_park_section: park_section } # Include allocated park section in the response
      else
        message = 'No vacant park sections available'
        render json: { message: message }
      end
    else
      message = 'Reservation not found'
      render json: { message: message }
    end
  end
  

  def find_vacant_park_section(park_num)
    next_vacant_park_section = ParkSection.find_by(park_num: park_num, park_status: 'VAC')
    return next_vacant_park_section if next_vacant_park_section
  
    next_vacant_park_section = ParkSection.find_by(park_status: 'VAC')
    return next_vacant_park_section if next_vacant_park_section
  
    nil # Return nil if no vacant park section is available at all
  end

  def login
    username = params[:username]
    password = params[:password]

    admin = Admin.find_by(username: username)

    if admin&.authenticate(password)
      # Set the admin's username in the session
      session[:admin_username] = admin.username
      render json: { message: 'Successfully logged in' }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end
  def current_admin
    @current_admin ||= Admin.find_by(username: session[:admin_username])
  end

  def search_reservations
    query = params[:query]

    if query.present?
      reservation = Reservation.find_by(ticket_number: query) || Reservation.find_by(vehicle_registration_number: query)

      if reservation
        render json: reservation
      else
        render json: { error: 'Reservation not found' }, status: :not_found
      end
    else
      render json: { error: 'Query parameter is missing' }, status: :unprocessable_entity
    end
  end

  def checkout
    admin_name = session[:admin_username]
    ticket_number = params[:ticket_number]
    vehicle_registration_number = params[:vehicle_registration_number]
  
    if ticket_number.present?
      reservation = Reservation.find_by(ticket_number: ticket_number)
    elsif vehicle_registration_number.present?
      reservation = Reservation.find_by(vehicle_registration_number: vehicle_registration_number)
    end
  
    if reservation
      park_section = ParkSection.find_by(park_status: 'OCC')
      case reservation.booking_status
      when 'REG' # Registered
        render json: { message: 'Vehicle has not been parked yet.' }
      when 'IN' # In
        park_section.update(park_status: 'VAC')
        reservation.update(booking_status: 'OUT', check_out_time: Time.now.gmtime + 3.hours) # Set booking status to "left" and record check-out time
        
        # Calculate the duration in minutes
        duration_in_seconds = reservation.check_out_time - reservation.check_in_time
        duration_in_minutes = duration_in_seconds / 60
        parking_charge = (duration_in_minutes * 0.5).round
        reservation.update(duration: duration_in_minutes.to_i, parking_charge: parking_charge, pay_state: 'TRUE') 
        
        render json: { message: 'Vehicle checked out successfully', duration: duration_in_minutes.to_i }
      when 'OUT' # Out
        render json: { message: 'Vehicle has already checked out' }
      end
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end
end
