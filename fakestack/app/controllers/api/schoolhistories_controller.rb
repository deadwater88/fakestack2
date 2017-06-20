class Api::SchoolhistoriesController < ApplicationController

  def create
      if school_history_params[:id]
        history = SchoolHistory.find_by(id: school_history_params[:id])
        history.update_attributes(school_history_params)
      else
        @history = SchoolHistory.new(school_history_params)
        @history.user_id = current_user.id
        if @history.save
          render :show
        else
          render json: @histoyr.errors.full_messages, status: 400
        end
      end
  end

  private

  def school_history_params
    params.require(:school_history).permit(:school,
                                           :start_date,
                                           :end_date,
                                           :description,
                                           :graduated,
                                           :type,
                                           :id,
                                           concentrations: [])
  end


end
