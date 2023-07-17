class AdminAttendeesController < ApplicationController
 
  def show_attendee
    attendee = Attendee.find(params[:id])

    if attendee
      render json: attendee
    else
      render json: { error: 'Attendee not found' }, status: :not_found
    end
  end
end
