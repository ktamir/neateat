require 'rails_helper'

RSpec.describe 'Restaurant API', type: :request do
  # initialize test data
  let!(:restaurants) { create_list(:restaurant, 10) }
  let(:restaurant_id) { restaurants.first.id }

  # Test suite for GET /restaurants
  describe 'GET /restaurants' do
    # make HTTP get request before each example
    before { get '/restaurants' }

    it { should respond_with 200 }

    it 'returns restaurants' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  # Test suite for GET /restaurants/:id
  describe 'GET /restaurants/:id' do
    before { get "/restaurants/#{restaurant_id}" }

    context 'when the record exists' do
      it { should respond_with 200 }

      it 'returns the restaurant' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(restaurant_id)
      end
    end

    context 'when the record does not exist' do
      let(:restaurant_id) { 100 }

      it { should respond_with 404 }

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Restaurant/)
      end
    end
  end

  # Test suite for POST /restaurants
  describe 'POST /restaurant' do
    # valid payload
    let(:valid_attributes) do
      { name: 'Restaurant', cuisine: 'French', rating: 2, accepts_10bis: true,
        address: '10 Derech Menachem Begin, Tel Aviv, Israel',
        max_delivery_time: 60 }
    end

    context 'when the request is valid' do
      before { post '/restaurants', params: valid_attributes }

      it { should respond_with 201 }

      it 'creates a restaurant' do
        expect(json['title']).to eq('Restaurant')
      end
    end

    context 'when the request is invalid' do
      before { post '/restaurants', params: { title: 'Restaurant' } }

      it { should respond_with 422 }

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Cuisine can't be blank/)
      end
    end
  end

  # Test suite for PUT /restaurants
  describe 'PUT /restaurants' do
    let(:valid_attributes) { { cuisine: 'Italian' } }

    context 'when the record exists' do
      before { put "/restaurants/#{restaurant_id}", params: valid_attributes }

      it { should respond_with 204 }

      it 'updates the record' do
        expect(response.body).to be_empty
      end
    end
  end
end
