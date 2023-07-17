class AdminController < ApplicationController
  def index
    @attendees = Attendee.includes(:parking_section)
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
      render json: { message: 'Access granted' }
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

  private

 def allocate_parking_section(attendee)
  if attendee.vehicle_type == 'car' || attendee.vehicle_type == 'bus'
    available_sections = ParkingSection.where(name: ['D', 'E', 'F', 'G'])
  else
    available_sections = ParkingSection.where(name: ['D', 'E', 'F', 'G'])
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
