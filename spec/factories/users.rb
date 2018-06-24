FactoryBot.define do
  factory :admin, class: User do
    email { Faker::Internet.email }
    password { Faker::Internet.password }
    status 0
  end

  factory :user do
    email { Faker::Internet.email }
    password { Faker::Internet.password }
  end
end
