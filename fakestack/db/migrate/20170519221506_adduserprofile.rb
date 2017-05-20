class Adduserprofile < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_img_url, :string, default: ""
    add_column :users, :intro, :string, default: ""
    add_column :users, :hometown, :string, default: ""
    add_column :users, :current_city, :string, default: ""
    add_column :users, :other_names, :text, array: true, default: []
    add_column :users, :favorite_quotes, :text, array: true, default: []
    add_column :users, :places, :text, array: true, default: []
  end
end
