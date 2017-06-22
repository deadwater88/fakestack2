class AddCollegeType < ActiveRecord::Migration[5.0]
  def change
    add_column :schoolhistories, :college_type, :string, default: ""
  end
end
