class ChangeDateFormatInSchoolhistories < ActiveRecord::Migration[5.0]

  def change
    change_column :schoolhistories, :start_date, :string
    change_column :workhistories, :start_date, :string
    change_column :schoolhistories, :end_date, :string
    change_column :workhistories, :end_date, :string
  end
end
