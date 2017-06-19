Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :relevant_users, only: [:index]
    end
    resources :friendings, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :index, :show, :update, :destroy]
    resources :posts, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :notices, only: [:index]
    resources :workhistories, only: [:create, :update, :destroy]
    resources :schoolhistories, only: [:create, :update, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
