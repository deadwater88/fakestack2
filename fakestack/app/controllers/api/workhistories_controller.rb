class Api::WorkhistoriesController < ApplicationController

  def create

  end


private

  def work_history_params
    params.require(:school_history).permit(:school, :start_date, :end_date, :description, :graduated, :type, :id, concentrations: [])
  end
end
