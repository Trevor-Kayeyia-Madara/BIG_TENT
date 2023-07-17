class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :vehicle_registration_number, :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, :vehicle_type, :ticket_number
end
