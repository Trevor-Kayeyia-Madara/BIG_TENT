class Attendee < ApplicationRecord
  belongs_to :parking_section, optional: true
    attribute :ticket_number, :string
    # Validations
    validates :vehicle_registration_number, presence: true, uniqueness: true
    validates :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, presence: true
    validates :vehicle_type, inclusion: { in: %w[car bus motorcycle] }
    validates :ticket_number, presence: true
  end
  