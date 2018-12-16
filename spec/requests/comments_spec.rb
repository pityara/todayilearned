require "rails_helper"

POST_COMMENTS = 100.freeze
COMMENTS_BY_PAGE = 10.freeze
EMPTY_ARRAY_LENGTH = 0.freeze

RSpec.describe Comment, type: :request, broken: true do
  let(:comment) {create(:comment)}
  let!(:user) {create(:user)}
  let!(:one_post) {create(:post)}
  let!(:post_without_comments) {create(:post)}
  let!(:comments) {create_list(:comment, POST_COMMENTS, post: one_post)}

  before do
    post '/api/auth',
         params: {
             email: user.email,
             password: user.password,
         }
    @token = json['auth_token']
  end

  describe 'GET /api/posts/:id/comments' do
    context 'when post has comments' do
      before {get "/api/posts/#{one_post.id}/comments"}

      it 'returns all comments of post as json' do
        expect(json.length).to eq(POST_COMMENTS)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
    context 'when post hasn\'t comments' do
      before {get "/api/posts/#{post_without_comments.id}/comments"}

      it 'returns empty array' do
        expect(json.length).to eq(EMPTY_ARRAY_LENGTH)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when post doesn\'t exists' do
      before {get "/api/posts/0/comments"}

      it 'returns correct error message' do
        expect(json['message']).to eq(['Post Not Found'])
      end

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe "GET /api/posts/:id/comments?limit=#{COMMENTS_BY_PAGE}&offset=0" do
    context 'when post has comments' do
      before {get "/api/posts/#{one_post.id}/comments?limit=#{COMMENTS_BY_PAGE}&offset=0"}

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it "returns #{COMMENTS_BY_PAGE} comments" do
        expect(json.length).to eq(COMMENTS_BY_PAGE)
      end
    end
    context 'when post hasn\'t comments' do
      before {post "/api/posts/#{post_without_comments.id}/comments?limit=#{COMMENTS_BY_PAGE}&offset=0"}

      it 'returns empty array' do
        expect(json.length).to eq(EMPTY_ARRAY_LENGTH)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "POST /api/posts/:id/comment" do
    let(:valid_attributes) {{text: Faker::Lorem.sentence}}
    let(:invalid_attributes) {{text: Faker::Lorem.paragraph_by_chars(600)}}
    context 'when comment attributes is correct' do
      before {post "/api/posts/#{one_post.id}/comment", params: valid_attributes, headers: {Authorization: @token}}

      it 'returns saved comment' do
        expect(json).not_to be_empty
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when add comment without auth_token' do
      before {post "/api/posts/#{one_post.id}/comments", params: valid_attributes}

      it 'returns correct error message' do
        expect(json['message']['token']).to eq(['Missing token', 'Invalid token'])
      end

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end

    context 'when try add comment to not existing post' do
      before {post '/api/posts/0/comments', params: valid_attributes, headers: {Authorization: @token}}

      it 'returns correct error message' do
        expect(json['message']).to eq(['Post Not Found'])
      end

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end

    context 'when try add comment with invalid params' do
      before {post "/api/posts/#{one_post.id}/comments", params: invalid_attributes, headers: {Authorization: @token} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns correct error message' do
        expect(json['message']['text']).to eq(['Invalid text'])
      end
    end
  end
end