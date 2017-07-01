require 'date'

class Api::SchoolhistoriesController < ApplicationController

  def create
      if school_history_params[:id]
        @history = Schoolhistory.find_by(id: school_history_params[:id])
        @history.update_attributes(school_history_params)
        render :show
      else
        @history = Schoolhistory.new(school_history_params)
        @history.user_id = current_user.id
        @history.id = nil
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
                                           :description,
                                           :graduated,
                                           :college_type,
                                           :id,
                                           concentrations: [],
                                           start_date: [:year, :month],
                                           end_date: [:month, :year])
  end


end
