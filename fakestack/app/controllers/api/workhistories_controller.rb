class Api::WorkhistoriesController < ApplicationController

  def create
      debugger
      if school_history_params[:id]
        history = WorkHistory.find_by(id: school_history_params[:id])
        history.update_attributes(school_history_params)
      else
        history = WorkHistory.new(school_history_params)
        history.user_id = current_user.id
        if history.create()

      end
  end

end


private

  def school_history_params
    params.require(:school_history).permit(:school, :start_date, :end_date, :description, :graduated, :type, :id, concentrations: [])
  end
