module ExceptionHandler
extend ActiveSupport::Concern
included do
  rescue_from ActiveRecord::RecordNotFound do |e|
    json_response({message: 'Post Not Found'}, :not_found)
  end

  rescue_from ActiveModel::UnknownAttributeError do |e|
    json_response({message: e.message}, :unprocessable_entity)
  end

  rescue_from ActiveRecord::RecordInvalid do |e|
    json_response({message: e.message}, :unprocessable_entity)
  end

  rescue_from ActionController::RoutingError do |e|
    json_response({ message: e.message }, :internal_error)
  end

end
end
