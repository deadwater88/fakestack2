class Denormalizerequestersandrecipients < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :requesters, :text, default: {}, array: true
    add_column :users, :recipients, :text, default: {}, array: true
  end
end
