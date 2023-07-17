class Attendee < ApplicationRecord
  belongs_to :parking_section, optional: true

  attribute :parked, :boolean, default: false
  attribute :ticket_number, :string

  # Validations
  validates :vehicle_registration_number, presence: true, uniqueness: true
  validates :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, presence: true
  validates :vehicle_type, inclusion: { in: %w[car bus motorcycle] }
  validates :ticket_number, presence: true

  
  def parked_status
    case parked
    when 0
      "RES"
    when 1
      "IN"
    when 2
      "OUT"
    end
  end

  def grant_access
    self.parked = 1 # Set parked status to 1 (IN)
    save
  end

  def checkout
    self.parked = 2 # Set parked status to 2 (OUT)
    save
  end

end