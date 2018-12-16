FactoryBot.define do
  factory :comment do
    text {Faker::Lorem.sentence}
    author {create(:user)}
  end
end
