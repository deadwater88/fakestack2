class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def index
    @user = User.find_by(id: params[:user_id])
    @comments = @user.authored_posts.joins(:comments) + @user.wall_posts.joins(:comments)
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Only authors may delete their own comments"], status: 401
    end

  end

  def show
    @comment = Comment.find_by(id: params[:id])
    @comment.includes(:replies)
    if @comment
      render :show
    else
      render json: ["Comment could not be found"], status: 404
    end

  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.author_id == current_user.id
      if @comment.update_attributes(comment_params)
        render :show
      else
        render json: @comment.errors.full_messages, status: 400
      end
    else
      render json: ["Only authors may edit their own comments"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :parent_id, :author_id, :parent_type)
  end
end
