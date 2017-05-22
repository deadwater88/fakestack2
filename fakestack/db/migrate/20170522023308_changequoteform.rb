class Changequoteform < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :favorite_quotes, :string, :default => ""
  end
end
