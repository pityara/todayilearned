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

  it 'can create a new post' do
    title = Faker::Lorem.word
    text = Faker::Lorem.sentence
    user.create_new_post({
      title: title,
      text:  text       })
    expect(user.posts.last.title).to eq(title)
    expect(user.posts.last.text).to eq(text)
  end

end
