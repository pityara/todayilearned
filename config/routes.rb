Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "welcome#hello"
  get 'hi', to: 'welcome#hi'
  post 'auth', to: 'authentication#authenticate'
end
