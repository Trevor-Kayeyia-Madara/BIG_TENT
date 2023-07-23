class Transact < ApplicationRecord
    has_and_belongs_to_many :reservations, join_table: :join_table_reservations_transacts, foreign_key: :transact_id, association_foreign_key: :reservation_id
    validates :transaction_date, :transaction_time, :duration, :amount, :day presence: true
end