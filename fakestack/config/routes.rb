Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :relevant_users, only: [:index]
    end
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
