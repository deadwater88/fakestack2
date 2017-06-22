require 'date'

class Api::SchoolhistoriesController < ApplicationController

  def create
      if school_history_params[:id]
        @history = Schoolhistory.find_by(id: school_history_params[:id])
        @history.update_attributes(school_history_params)
      else
        @history = Schoolhistory.new(school_history_params)
        @history.user_id = current_user.id
        if @history.save
          render :show
        else
          render json: @history.errors.full_messages, status: 400
        end
      end
  end

  private

  def school_history_params
    purged = params.require(:school_history).permit(:school,
                                           :start_date,
                                           :end_date,
                                           :description,
                                           :graduated,
                                           :college_type,
                                           :id,
                                           concentrations: [])
    purged[:start_date] = parseDate(purged[:start_date])
    purged[:end_date] = parseDate(purged[:end_date])
  end


end
