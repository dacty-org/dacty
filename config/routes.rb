Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #SiteControllerのIndexアクションにながれる
  get '/', to: 'site#index'

  namespace :api do
    namespace :v1 do
      # %i 要素がシンボルの配列を作る。シンボルとは[: ]
      resources :contents, only: %i[index show create update destroy]
    end
  end

end
