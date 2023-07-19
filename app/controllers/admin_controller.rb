class AdminController < ApplicationController
  def index
    @attendees = Attendee.includes(:parking_section).select(:id, :ticket_number, :vehicle_registration_number, :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, :vehicle_type, :booking_status)
  end

  def grant_access
    attendee = Attendee.find_by(ticket_number: params[:ticket_number])

    if attendee
      attendee.update(booking_status: 'IN',check_in_time: Time.now)
      message = 'Vehicle successfully checked in'
      render json: { message: message }
    else
      message = 'Attendee not found'
      render json: { message: message }
    end
  end

  def login
    username = params[:username]
    password = params[:password]

    admin = Admin.find_by(username: username)

    if admin&.authenticate(password)
      render json: { message: 'Successfully logged in' }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def search_attendee
    query = params[:query]

    if query.present?
      attendee = Attendee.find_by(ticket_number: query) || Attendee.find_by(vehicle_registration_number: query)

      if attendee
        render json: attendee
      else
        render json: { error: 'Attendee not found' }, status: :not_found
      end
    else
      render json: { error: 'Query parameter is missing' }, status: :unprocessable_entity
    end
  end

  def checkout
    ticket_number = params[:ticket_number]
    vehicle_registration_number = params[:vehicle_registration_number]

    if ticket_number.present?
      attendee = Attendee.find_by(ticket_number: ticket_number)
    elsif vehicle_registration_number.present?
      attendee = Attendee.find_by(vehicle_registration_number: vehicle_registration_number)
    end

    if attendee
      case attendee.booking_status
      when 'REG' # Registered
        render json: { message: 'Vehicle has not been parked yet.' }
      when 'IN' # In
        attendee.update(booking_status: 'OUT', check_out_time: Time.now) # Set booking status to "left" and record check-out time
        render json: { message: 'Vehicle checked out successfully' }
      when 'OUT' # Out
        render json: { message: 'Vehicle has already checked out' }
      end
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end
end
