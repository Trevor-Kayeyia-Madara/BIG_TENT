class AddParkedToAttendees < ActiveRecord::Migration[7.0]
  def change
    add_column :attendees, :parked, :integer, default: 0, null: false
  end
end
