class CreateTransacts < ActiveRecord::Migration[7.0]
  def change
    create_table :transacts do |t|
      t.date :transaction_date
      t.time :transaction_time
      t.integer :duration
      t.float :amount
      t.string :day

      t.timestamps
    end
  end
end
