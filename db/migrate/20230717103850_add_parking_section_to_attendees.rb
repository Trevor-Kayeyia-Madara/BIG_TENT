class AddParkingSectionToAttendees < ActiveRecord::Migration[7.0]
  def change
    add_reference :attendees, :parking_section, null: true, foreign_key: true, default: 0
  end
end
