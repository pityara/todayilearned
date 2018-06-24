class User < ApplicationRecord
  has_secure_password
  has_many :posts, foreign_key: "author_id", dependent: :destroy

  def create_new_post(params)
    posts << Post.create(params)
  end

end
