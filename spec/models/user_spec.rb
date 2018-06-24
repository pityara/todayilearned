require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }
  let!(:admin) { create(:admin) }

  #Association tests
  it { should have_many(:posts).with_foreign_key("author_id").dependent(:destroy) }

  #Creation tests

  it 'creates a user with default status that equals 0' do
    expect(user.status).to eq(0)
  end


end
