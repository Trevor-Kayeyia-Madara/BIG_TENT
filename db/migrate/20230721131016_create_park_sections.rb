class CreateParkSections < ActiveRecord::Migration[7.0]
  def change
    create_table :park_sections do |t|
      t.string :park_name
      t.string :park_num
      t.string :park_status

      t.timestamps
    end
  end
end
