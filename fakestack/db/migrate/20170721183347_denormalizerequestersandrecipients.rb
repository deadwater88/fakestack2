class Denormalizerequestersandrecipients < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :requesters, :text, default: '{}'
    add_column :users, :recipients, :text, default: '{}'
  end
end
