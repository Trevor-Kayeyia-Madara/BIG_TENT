class Reservation < ApplicationRecord
  has_and_belongs_to_many :transacts, join_table: :join_table_reservations_transacts, foreign_key: :reservation_id, association_foreign_key: :transact_id
  attribute :ticket_number, :string
  enum booking_status: { REG: 'REG', IN: 'IN', OUT: 'OUT' }

  attr_accessor :check_in_time_str, :check_out_time_str
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
end
