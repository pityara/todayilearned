require "rails_helper"

RSpec.describe User, type: :request do
  let!(:user) { create(:user) }

  describe 'POST /api/auth' do
    context 'when user data is correct' do
      before { post "/api/auth",
                    params: {
                      email: user.email,
                      password: user.password } }
      it 'returns token' do
        expect(json["auth_token"]).not_to be_empty
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when user data is incorrect' do
      before { post '/api/auth',
                    params: {
                      email: user.email,
                      password: 'Incorrect' } }
      it 'returns error with correct message' do
        expect(json['error']['user_authentication'].first)
          .to eq('invalid credentials')
      end

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'GET /api/auth' do
    let(:another_user) { create(:user) }
    before {  post '/api/auth',
                   params: {
                     email: user.email,
                     password: user.password } }

    context 'when token is correct' do
      before do
        headers = {
          "Authorization": json["auth_token"]
        }
        get '/api/auth', headers: headers
      end
      it 'returns user data' do
        expect(json).not_to be_empty
        expect(json['id']).to eq user.id
        expect(json['email']).to eq user.email
      end
      it 'returns status code 200' do
        expect(response).to have_http_status 200
      end
    end

    context 'when token is incorrect' do
      before do
        headers = {
          'Authorization': 'IncorrectTokenBlahblah'
        }
        get '/api/auth', headers: headers
      end
      it 'returns correct error message' do
        expect(json['message']['token'].first).to eq('Invalid token')
      end
      it 'retutns status code 401' do
        expect(response).to have_http_status(401)
      end
    end

    context 'when token is missing' do
      before { get '/api/auth' }
      it 'returns correct error messages' do
        expect(json['message']['token']).to eq(['Missing token', 'Invalid token'])
      end
      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

end
