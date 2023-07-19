class ParkingSection < ApplicationRecord
  has_many :attendees
  validates :name, presence: true
  validates :capacity, presence: true
  validates :attendee_type, presence: true
end
