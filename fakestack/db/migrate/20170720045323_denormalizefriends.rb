class Denormalizefriends < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :friends, :text
  end
end
