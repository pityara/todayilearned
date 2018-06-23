class Api::UserController < ApplicationController

  def show
    json_response @current_user
  end

end
