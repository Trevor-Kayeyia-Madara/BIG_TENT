class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :vehicle_registration_number
      t.string :vehicle_make
      t.string :vehicle_model
      t.string :driver_first_name
      t.string :driver_last_name
      t.string :driver_identification_number
      t.string :driver_email
      t.string :driver_telephone_number
      t.string :vehicle_type
      t.time :check_in_time
      t.string :check_in_admin
      t.time :check_out_time
      t.string :check_out_admin
      t.datetime :date_stamp
      t.string :booking_status
      t.string :ticket_number
      # t.string :park_num
      t.integer :duration
      t.float :parking_charge
      t.boolean :pay_state
      
      t.timestamps
    end
  end
end
