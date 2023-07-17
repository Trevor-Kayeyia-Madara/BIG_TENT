# app/models/parking_section.rb

class ParkingSection < ApplicationRecord
    has_many :attendees
  
    validates :name, presence: true, uniqueness: true
    validates :capacity, presence: true, numericality: { greater_than_or_equal_to: 0 }
  end
  