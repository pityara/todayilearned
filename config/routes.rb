Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "welcome#hello"
  namespace :api do
    post 'auth', to: 'authentication#authenticate'
  end
  get '*path', to: 'welcome#hello'
end
