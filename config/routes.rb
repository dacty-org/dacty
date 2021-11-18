Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: redirect('/contents')

  #SiteControllerのIndexアクションにながれる
  get 'contents', to: 'site#index'
  get 'contents/new', to: 'site#index'
  get 'contents/:id/edit', to: 'site#index'

  namespace :api do
    namespace :v1 do
      delete '/contents/destroy_all', to: 'contents#destroy_all'
      # %i 要素がシンボルの配列を作る。シンボルとは[: ]
      resources :contents, only: %i[index show create update destroy]
    end
  end

end
