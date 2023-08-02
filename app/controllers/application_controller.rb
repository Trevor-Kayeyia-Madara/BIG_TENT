# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    private
  
    def current_admin
      @current_admin ||= Admin.find_by(username: session[:admin_username]) if session[:admin_username]
    end
  
    def require_login
      unless current_admin
        render json: { error: 'You must be logged in to access this page' }, status: :unauthorized
      end
    end
  end
  