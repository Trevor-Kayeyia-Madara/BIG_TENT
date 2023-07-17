class AttendeesController < ApplicationController
  def index
    @attendees = Attendee.all
    render json: @attendees, each_serializer: AttendeeSerializer
  end

  def create
    @attendee = Attendee.create(attendee_params)
    if @attendee
      ticket_number = generate_ticket_number
      @attendee.update(ticket_number: ticket_number)
      render json: @attendee, serializer: AttendeeSerializer
    else
      render json: { error: "Failed to register attendee" }, status: :unprocessable_entity
    end
  end

  def search_attendee
    query = params[:query]

    if query.present?
      attendee = Attendee.find_by(ticket_number: query) || Attendee.find_by(vehicle_registration_number: query)

      if attendee
        render json: attendee, serializer: AttendeeSerializer
      else
        render json: { error: 'Attendee not found' }, status: :not_found
      end
    else
      render json: { error: 'Query parameter is missing' }, status: :unprocessable_entity
    end
  end

  def show
    attendee = Attendee.find_by(id: params[:id])

    if attendee
      render json: attendee, serializer: AttendeeSerializer
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end

  # ...

  private

  def attendee_params
    params.permit(:vehicle_registration_number, :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, :vehicle_type)
  end

  def generate_ticket_number
    date_format = Time.now.strftime("%Y%m%d")
    attendees_count = Attendee.count.to_s.rjust(3, '0')
    "BIGTENT#{date_format}-#{attendees_count}"
  end
end