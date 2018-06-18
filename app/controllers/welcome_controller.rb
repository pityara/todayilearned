class WelcomeController < ApplicationController
  skip_before_action :authenticate_request, only: :hello

  def hello; end
  def hi; end
end
