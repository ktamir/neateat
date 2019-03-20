require 'rails_helper'

RSpec.describe 'Review API', type: :request do
  # initialize test data
  let!(:restaurant) { create(:restaurant) }
  let!(:reviews) { create_list(:review, 10, restaurant_id: restaurant.id) }
  let(:restaurant_id) { restaurant.id }
  let(:review_id) { reviews.first.id }

  # Test suite for GET /restaurants/:restaurant_id/reviews
  describe 'GET /restaurants/:restaurant_id/reviews' do
    # make HTTP get request before each example
    before { get "/restaurants/#{restaurant_id}/reviews" }

    it { expect(response).to have_http_status(200) }

    it 'returns reviews' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  # Test suite for GET /restaurants/:restaurant_id/reviews/:review_id
  describe 'GET /restaurants/:restaurant_id/reviews/:review_id' do
    before { get "/restaurants/#{restaurant_id}/reviews/#{review_id}" }

    context 'when the record exists' do
      it { expect(response).to have_http_status(200) }

      it 'returns the review' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(review_id)
      end
    end

    context 'when the record does not exist' do
      let(:review_id) { 100 }

      it { expect(response).to have_http_status(404) }

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Review/)
      end
    end
  end

  # Test suite for POST /restaurants/:restaurant_id/review
  describe 'POST /restaurants/:restaurant_id/reviews' do
    # valid payload
    let(:review) { create(:review) }

    context 'when the request is valid' do
      before { post "/restaurants/#{restaurant_id}/reviews", params: review.as_json }

      it { expect(response).to have_http_status(201) }

      it 'creates a review' do
        expect(json['description']).to eq(review.description)
        expect(json['reviewer_name']).to eq(review.reviewer_name)
        expect(json['rating']).to eq(review.rating)
        expect(json['restaurant_id']).to eq(restaurant_id)
      end
    end

    context 'when the request is invalid' do
      before { post "/restaurants/#{restaurant_id}/reviews", params: { reviewer_name: '1' } }

      it { expect(response).to have_http_status(422) }

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Rating can't be blank/)
      end
    end
  end

  # Test suite for PUT /restaurants
  describe 'PUT /restaurants/:restaurant_id/reviews' do
    let(:valid_attributes) { { description: 'Cool modified description' } }

    context 'when the record exists' do
      before { put "/restaurants/#{restaurant_id}/reviews/#{review_id}", params: valid_attributes }

      it { expect(response).to have_http_status(204) }

      it 'updates the record' do
        expect(response.body).to be_empty
      end
    end
  end
end
