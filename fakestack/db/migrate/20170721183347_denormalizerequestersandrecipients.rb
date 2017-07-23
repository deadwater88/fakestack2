class Denormalizerequestersandrecipients < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :requesters, :text, default: {}.to_yaml
    add_column :users, :recipients, :text, default: {}.to_yaml
  end
end
