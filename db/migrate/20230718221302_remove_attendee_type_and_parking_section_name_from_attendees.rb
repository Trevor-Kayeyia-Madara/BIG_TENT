class RemoveAttendeeTypeAndParkingSectionNameFromAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_column :attendees, :attendee_type, :string
    remove_column :attendees, :parking_section_name, :string
  end
end
