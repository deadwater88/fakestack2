Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only:[:index, :show, :create, :update]
    resources :relevant_users, only: [:index]
    resources :conversations, only: [:index]
    resources :friendings, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :notices, only: [:index]
    resources :workhistories, only: [:create, :update, :destroy]
    resources :schoolhistories, only: [:create, :update, :destroy]
  end

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
