require "test_helper"

class AdminAttendeesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get admin_attendees_show_url
    assert_response :success
  end
end
