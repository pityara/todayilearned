class Api::PostsController < ApplicationController
  skip_before_action :authenticate_request, only: [:index, :show]
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :can, only: [:update, :destroy]

  def index; json_response Post.all end

  def show; json_response @post end

  def create
    json_response @current_user.create_new_post(post_params), :created
  end

  def update
    @post.update(post_params) ?
      json_response(@post, :accepted) :
      json_response(@post, :unprocessable_entity)
  end

  def destroy
    @post.destroy ?
      json_response('', :no_content) :
      json_response(@post, :unprocessable_entity)
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.permit(:title, :text)
  end

  def can
    unless @post.author == @current_user
      json_response({ message: "You can't do this" }, :forbidden)
    end
  end
end
