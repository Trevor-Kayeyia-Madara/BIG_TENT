class ChangeCheckInCheckOutColumnsInAttendees < ActiveRecord::Migration[7.0]
  def change
    rename_column :attendees, :check_in_date, :check_in_time
    rename_column :attendees, :check_out_date, :check_out_time
  end
end
