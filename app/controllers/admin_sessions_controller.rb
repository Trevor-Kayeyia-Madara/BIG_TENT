class AdminSessionsController < ApplicationController
    def login
      username = params[:username]
      password = params[:password]
  
      admin = Admin.find_by(username: username)
  
      if admin&.authenticate(password)
        # Set the admin's username in the session
        session[:admin_username] = admin_username
        redirect_to admin_dashboard_path, notice: 'Login successful!'
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end
  
    def signup
      admin = Admin.new(username: params[:username], password: params[:password])
  
      if admin.save
        # Set the admin's username in the session upon successful signup
        session[:admin_username] = admin.username
        render json: { message: 'Successfully signed up and logged in' }
      else
        render json: { error: admin.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end
  
    def logout
      # Clear the admin's session upon logout
      session.delete(:admin_username)
      render json: { message: 'Logged out successfully' }
    end
  end
  