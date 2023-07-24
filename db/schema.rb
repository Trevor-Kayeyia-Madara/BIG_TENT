# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_21_131016) do
  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_admins_on_username", unique: true
  end

  create_table "park_sections", force: :cascade do |t|
    t.string "park_name"
    t.string "park_num"
    t.string "park_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.string "vehicle_registration_number"
    t.string "vehicle_make"
    t.string "vehicle_model"
    t.string "driver_first_name"
    t.string "driver_last_name"
    t.string "driver_identification_number"
    t.string "driver_email"
    t.string "driver_telephone_number"
    t.string "vehicle_type"
    t.time "check_in_time"
    t.time "check_out_time"
    t.datetime "date_stamp"
    t.string "booking_status"
    t.string "ticket_number"
    t.integer "duration"
    t.float "parking_charge"
    t.boolean "pay_state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
