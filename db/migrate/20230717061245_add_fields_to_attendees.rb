class AddFieldsToAttendees < ActiveRecord::Migration[7.0]
  def change
    add_column :attendees, :parking_section, :string
    add_column :attendees, :check_in, :datetime
    add_column :attendees, :check_out, :datetime
  end
end
