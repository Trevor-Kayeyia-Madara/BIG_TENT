class Attendee < ApplicationRecord
  belongs_to :parking_section, foreign_key: :parking_section_id, optional: true


 
  attribute :ticket_number, :string

  enum attendee_type: { regular: 'regular', vip: 'vip', big_tent_organizer: 'big_tent_organizer' }
  enum booking_status: { REG: 'REG', IN: 'IN', OUT: 'OUT' }

  # Validations
  validates :vehicle_registration_number, presence: true, uniqueness: true
  validates :vehicle_make, :vehicle_model, :driver_first_name, :driver_last_name, :driver_identification_number, :driver_email, :driver_telephone_number, presence: true
  validates :vehicle_type, inclusion: { in: %w[CAR BUS MCYCLE TRUCK] }
  validates :ticket_number, presence: true

  before_create :set_date_stamp

  private

  def set_date_stamp
    self.date_stamp = Time.now
  end
  def set_check_in_time
    self.check_in_time =Time.now
  end
end
