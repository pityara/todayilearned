class AuthenticateUser
  prepend SimpleCommand
  extend Dry::Initializer

  param :email
  param :password

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password

  def user
    user = User.find_by(email: email)
    return user if user && user.authenticate(password)
    errors.add :user_authentication, 'invalid credentials'
    nil
  end


end
