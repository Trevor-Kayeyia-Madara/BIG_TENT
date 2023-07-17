class AdminController < ApplicationController
  def index
    @attendees = Attendee.includes(:parking_section).select(:id, :ticket_number, :vehicle_registration_number, :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, :vehicle_type, :parked)
  end
  

  def grant_access
    ticket_number = params[:ticket_number]
    vehicle_registration_number = params[:vehicle_registration_number]

    if ticket_number.present?
      attendee = Attendee.find_by(ticket_number: ticket_number)
    elsif vehicle_registration_number.present?
      attendee = Attendee.find_by(vehicle_registration_number: vehicle_registration_number)
    end

    if attendee
      case attendee.parked
      when 0 # RES
        attendee.update(parked: 1) # Set parked status to 1 (IN)
        render json: { message: 'Access granted. Vehicle parked.' }
      when 1 # IN
        render json: { message: 'Access granted. Vehicle already parked.' }
      when 2 # OUT
        render json: { message: 'Access granted. Vehicle has already checked out.' }
      end
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end

  def login
    username = params[:username]
    password = params[:password]

    admin = Admin.find_by(username: username)

    if admin && admin.authenticate(password)
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
      case attendee.parked
      when 0 # RES
        render json: { message: 'Vehicle has not been parked yet.' }
      when 1 # IN
        attendee.update(parked: 2) # Set parked status to 2 (OUT)
        render json: { message: 'Attendee checked out successfully' }
      when 2 # OUT
        render json: { message: 'Vehicle has already checked out' }
      end
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end

  private
  
  def allocate_parking_section(attendee)
    if attendee.vehicle_type == 'car' || attendee.vehicle_type == 'bus'
      available_sections = ParkingSection.where(name: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])
    else
      available_sections = ParkingSection.where(name: ['D', 'E', 'F', 'G', 'H', 'I', 'J'])
    end
  
    available_sections.each do |section|
      if section.attendees.count < section.capacity
        return section
      end
    end
  
    # If no available section found, return nil or handle it as per your requirement
    return nil
  end
  
end
