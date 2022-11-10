require 'rails_helper'

describe User, type: :model do
  let(:user) { FactoryBot.build :user }

  it "can be created using a factory" do
    expect(user).to be_valid
  end

  it "sets an email" do
    expect(user.email).not_to be_blank
  end
end
