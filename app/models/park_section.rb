class ParkSection < ApplicationRecord
    validates :park_name, presence: true
    validates :park_num,  presence: true 
end