Rails.application.routes.draw do
  root to: "welcome#hello"
  namespace :api do
    get 'auth', to: 'user#show'
    post 'auth', to: 'authentication#authenticate'
  end
  get '*path', to: 'welcome#hello'
end
