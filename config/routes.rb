Rails.application.routes.draw do
  resources :attendees, only: [:index, :new, :create, :show]
    get '/admin', to: 'admin#index'
    post '/admin/grant_access', to: 'admin#grant_access'
    post '/admin/record_time_out', to: 'admin#record_time_out'
    post '/admin/login', to: 'admin#login'
    get 'admin/search_attendee', to: 'attendees#search_attendee'
  end
  