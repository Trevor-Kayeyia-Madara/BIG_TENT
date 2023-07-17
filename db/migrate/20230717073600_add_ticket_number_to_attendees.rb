class AddTicketNumberToAttendees < ActiveRecord::Migration[7.0]
  def change
    add_column :attendees, :ticket_number, :string
  end
end
