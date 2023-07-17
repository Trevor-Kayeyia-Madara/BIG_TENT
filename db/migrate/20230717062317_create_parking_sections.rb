class CreateParkingSections < ActiveRecord::Migration[7.0]
  def change
    create_table :parking_sections do |t|
      t.string :name
      t.integer :capacity

      t.timestamps
    end
  end
end
