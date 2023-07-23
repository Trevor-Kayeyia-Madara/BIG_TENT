class CreateJoinTableReservationsTransacts < ActiveRecord::Migration[7.0]
  def change
    create_join_table :reservations, :transacts do |t|
      t.string :vehicle_reg_no
      # t.index [:reservation_id, :transact_id]
      # t.index [:transact_id, :reservation_id]
    end
  end
end
