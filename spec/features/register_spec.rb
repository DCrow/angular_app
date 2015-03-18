require 'spec_helper.rb'

feature "Registering", :js => true do
	scenario "register" do		
		visit '/'
		byebug
		click_link "Register"
		byebug
		expect(page).to have_content("You can register here :)")
		fill_in "nameInput", with: "Hell"
		fill_in "passInput", with: "Boom"
		click_on "submit"
		expect(page).to have_content("Success")
	end
end
