class CreateAttendees < ActiveRecord::Migration[7.0]
  def change
    create_table :attendees do |t|
      t.string :vehicle_registration_number
      t.string :vehicle_make
      t.string :vehicle_model
      t.string :driver_first_name
      t.string :driver_last_name
      t.string :driver_identification_number
      t.string :driver_email
      t.string :driver_telephone_number
      t.string :vehicle_type
      t.datetime :check_in_date
      t.datetime :check_out_date
      t.datetime :date_stamp
      t.string :booking_status
      t.string :ticket_number
      t.string :attendee_type
      t.string :parking_section_name

      t.timestamps
    end
  end
end
