Rails.application.routes.draw do
  root to: "welcome#hello"
  namespace :api do
    get 'auth', to: 'users#show'
    post 'auth', to: 'authentication#authenticate'
    resources :posts
  end
  get '*path', to: 'welcome#hello'
end
