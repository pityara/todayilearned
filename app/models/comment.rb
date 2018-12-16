class Comment < ApplicationRecord
  belongs_to :author, class_name: "User"
  belongs_to :post, dependent: :destroy
end
