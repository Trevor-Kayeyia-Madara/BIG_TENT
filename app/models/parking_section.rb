class ParkingSection < ActiveRecord::Base
    has_many :attendees
  end