FactoryBot.define do
  factory :post do
    title { Faker::Lorem.word }
    text { Faker::Lorem.sentence }
    author { create(:user) }
  end
end
