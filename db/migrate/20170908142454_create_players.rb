class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.integer :attack
      t.integer :defense
      t.integer :experience

      t.timestamps null: false
    end
  end
end
