require 'rails_helper'

RSpec.describe Comment, type: :model, broken: true do
  #Association tests
  it { should belong_to(:author).with_foreign_key("author_id") }
  it { should belong_to(:post).dependent(:destroy) }
end
