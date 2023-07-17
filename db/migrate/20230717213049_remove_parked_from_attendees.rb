class RemoveParkedFromAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_column :attendees, :parked
  end
end
