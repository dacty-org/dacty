class Api::V1::ContentsController < ApplicationController
  def index
    contents = Content.order(updated_at: :desc)
    render json: contents
  end

  def show
    content = Content.find(params[:id])
    render json: content
  end

  def create
    content = Content.new(content_params)
    if content.save
      render json: content
    else
      render json: content.errors, status: 422
    end
  end

  def update
    content = Content.find(params[:id])
    if content.update(content_params)
      render json: content
    else
      render json: content.errors, status: 422
    end
  end

  def destroy
    if Content.destroy(params[:id])
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  def destroy_all
    if Content.destroy_all
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  private

  def content_params
    params.require(:content).permit(:title, :description, :content_thumbnail, :account, :account_thumbnail)
  end
end