class RemoveParkingSectionFromAttendees < ActiveRecord::Migration[7.0]
  def change
    remove_reference :attendees, :parking_section, null: false, foreign_key: true
  end
end
