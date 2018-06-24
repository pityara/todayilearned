class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  include Response
  include ExceptionHandler

  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    authorize_result = AuthorizeApiRequest.call(request.headers)
    @current_user = authorize_result.result
    json_response({ message: authorize_result.errors }, :unauthorized) unless @current_user
  end
end
