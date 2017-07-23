class Denormalizefriends < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :friends, :text, default: {}.to_yaml
  end
end
