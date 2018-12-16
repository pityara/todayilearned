require "rails_helper"

RSpec.describe Post, type: :request do
  let!(:posts) { create_list(:post, 10) }
  let(:one_post) { create(:post) }
  let!(:user) { create(:user) }
  let!(:another_user) { create(:user) }
  before do
    post '/api/auth',
         params: {
           email: user.email,
           password: user.password,
         }
    @token = json['auth_token']
  end
  before do
    post '/api/auth',
         params: {
           email: another_user.email,
           password: another_user.password,
         }
    @another_token = json['auth_token']
  end

  describe 'GET /api/posts' do
    before { get '/api/posts' }

    it 'returns all posts as json' do
      expect(json.length).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

  end

  describe 'GET /api/posts/:id' do
    context 'when post exists' do
      before { get "/api/posts/#{one_post.id}" }

      it 'returns correct post' do
        expect(json['id']).to eq(one_post.id)
        expect(json['title']).to eq(one_post.title)
        expect(json['text']).to eq(one_post.text)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when post does not exists' do
      before { get '/api/posts/112' }

      it 'returns correct error message' do
        expect(json['message']).to eq('Post Not Found')
      end

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /api/posts' do
    let(:valid_attributes) { {
                              title: Faker::Lorem.word,
                              text:  Faker::Lorem.sentence,
                            } }
    context 'when post with correct token' do
      before do
        headers = {
          Authorization: @token
        }
        post '/api/posts',
             params: valid_attributes,
             headers: headers
      end

      it 'returns saved post' do
        expect(json).not_to be_empty
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when post without auth_token' do
      before do
        post '/api/posts',
             params: valid_attributes
      end

      it 'returns correct error message' do
        expect(json['message']['token']).to eq(['Missing token', 'Invalid token'])
      end

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'PUT /api/posts/:id' do
    let(:valid_attributes) { {
                               title: 'New title'
                             } }
    let(:posttwo) { create(:post, { author: user }) }
    context 'when user is author of post' do
      before do
        headers = {
          Authorization: @token,
        }
        put "/api/posts/#{posttwo.id}",
            params: valid_attributes,
            headers: headers
      end

      it 'returns updated post' do
        expect(json['title']).to eq('New title')
      end

      it 'returns status code 202' do
        expect(response).to have_http_status(202)
      end
    end

    context 'when user is not author of post' do
      before do
        headers = {
          Authorization: @another_token,
        }
        put "/api/posts/#{posttwo.id}",
            params: valid_attributes,
            headers: headers
      end

      it 'returns correct error message' do
        expect(json['message']).to eq("You can't do this")
      end

      it 'returns status code 403' do
        expect(response).to have_http_status(403)
      end
    end
  end

  describe 'DELETE /api/posts/:id' do
    let(:postthree) { create(:post, { author: user }) }
    context 'when user is author of post' do
      before do
        headers = {
          Authorization: @token,
        }
        delete "/api/posts/#{postthree.id}",
               headers: headers
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
    context 'when user is not author of post' do
      before do
        headers = {
          Authorization: @another_token,
        }
        delete "/api/posts/#{postthree.id}",
               headers: headers
      end

      it 'returns correct error message' do
        expect(json['message']).to eq("You can't do this")
      end

      it 'returns status code 403' do
        expect(response).to have_http_status(403)
      end
    end
  end
end
