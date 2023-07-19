Rails.application.routes.draw do
  get 'admin_attendees/show'
  resources :attendees, only: [:index, :new, :create, :show]
    get '/admin', to: 'admin#index'
    post '/admin/grant_access', to: 'admin#grant_access'
    post '/admin/login', to: 'admin#login'
    post '/admin/checkout', to: 'admin#checkout'
    get 'admin/search_attendee', to: 'attendees#search_attendee'
    get '/admin/allocated_slots_count', to: 'admin#allocated_slots_count'

  end
  