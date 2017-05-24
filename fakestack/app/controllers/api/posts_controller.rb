class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def index
    @user = User.find_by(id: params[:user_id])
    @posts = @user.authored_posts + @user.wall_posts
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.author_id == current_user.id || @post.location_id == current_user.id
      @post.destroy
      render :show
    else
      render json: ["You are not authorized to delete this post"], status: 403
    end

  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post
      @post.includes(:comments)
      render :show
    else
      render json: ['Post could not be found'], status: 404
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.author_id == current_user.id
      if @post.update_attributes(post_params)
        render :show
      else
        render json: @post.errors.full_messages, status: 400
      end
    else
      render json: ["Only authors may edit their own posts"], status: 404
    end
  end

  def post_params
    params.require(:post).permit(:content, :location_id, :author_id,)
  end
end
