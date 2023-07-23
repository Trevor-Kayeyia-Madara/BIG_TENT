class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
    render json: @reservations, each_serializer: ReservationSerializer
  end

  def create
    @reservation = Reservation.create(reservation_params)
    @park_section = ParkSection.update(park_status: 'VAC')
    if @reservation
      ticket_number = generate_ticket_number  
      @reservation.update(ticket_number: ticket_number, date_stamp: Time.now, booking_status: 'REG')
      render json: @reservation, serializer: ReservationSerializer
    else
      render json: { error: "Failed to reserve" }, status: :unprocessable_entity
    end
  end
  

  def search_reservations
    query = params[:query]

    if query.present?
      reservation = Reservation.find_by(ticket_number: query) || Reservation.find_by(vehicle_registration_number: query)

      if reservation
        render json: reservation, serializer: ReservationSerializer
      else
        render json: { error: 'Reservation not found' }, status: :not_found
      end
    else
      render json: { error: 'Query parameter is missing' }, status: :unprocessable_entity
    end
  end

  def show
    reservation = Reservation.find_by(id: params[:id])

    if reservation
      render json: reservation, serializer: ReservationSerializer
    else
      render json: { error: 'Reservation not found' }, status: :not_found
    end
  end

  def checkout
    reservation = Reservation.find_by(ticket_number: params[:ticket_number])

    if reservation
      reservation.update(parked: false)
      render json: { message: 'Checked out of parking.' }
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end

  private

  def reservation_params
    params.permit(:vehicle_registration_number, :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, :vehicle_type)
  end

  def generate_ticket_number
    date_format = Time.now.strftime("%Y%m%d")
    reservation_count = Reservation.count.to_s.rjust(3, '0')
    "TMK#{date_format}-#{reservation_count}"
  end
end
