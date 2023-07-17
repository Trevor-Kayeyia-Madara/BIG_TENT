class RemoveTimeInAndTimeOutFromAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_column :attendees, :time_in, :datetime
    remove_column :attendees, :time_out, :datetime
  end
end
