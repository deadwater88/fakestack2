class AddBiography < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cover_img_url, :string, default: ""
    add_column :users, :biography, :string, default: ""
  end
end
