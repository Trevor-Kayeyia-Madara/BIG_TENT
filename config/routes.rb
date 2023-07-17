Rails.application.routes.draw do
  get 'admin_attendees/show'
  resources :attendees, only: [:index, :new, :create, :show]
    get '/admin', to: 'admin#index'
    post '/admin/grant_access', to: 'admin#grant_access'
    post '/admin/login', to: 'admin#login'
    post '/admin/checkout', to: 'admin#checkout'
    get '/admin/parking_sections', to: 'admin#parking_sections'
    get 'admin/search_attendee', to: 'attendees#search_attendee'
  end
  