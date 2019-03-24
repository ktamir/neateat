class ReviewsController < ApplicationController
  before_action :set_review, only: %i(show update destroy)

  # GET /restaurants/:restaurant_id/reviews
  def index
    @restaurant = Restaurant.find params[:restaurant_id]
    json_response @restaurant.reviews
  end

  # POST /restaurants/:restaurant_id/reviews
  def create
    @review = Review.create! review_params
    @restaurant = Restaurant.find params[:restaurant_id]
    @restaurant.calculate_average_rating
    @restaurant.save
    json_response @review, :created
  end

  # GET /restaurants/:restaurant_id/reviews/:review_id
  def show
    json_response @review
  end

  # PUT /restaurants/:restaurant_id/reviews/:review_id
  def update
    @review.update review_params
    head :no_content
  end

  # DELETE /restaurants/:restaurant_id/reviews/:review_id
  def destroy
    @review.destroy
    head :no_content
  end

  private

  def review_params
    # whitelist params
    params.permit :reviewer_name, :rating, :description, :restaurant_id
  end

  def set_review
    @review = Review.find params[:id]
  end
end
