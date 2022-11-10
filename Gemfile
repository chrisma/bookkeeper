source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use sqlite3 as the database for Active Record
gem "sqlite3", "~> 1.4"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Bootstrap CSS [https://github.com/twbs/bootstrap-rubygem]
gem "bootstrap", "~> 5.2.2"

# Use Sass to process CSS
gem "sassc-rails"

# Use devise as an authentication solution [https://github.com/plataformatec/devise]
gem "devise", github: "heartcombo/devise", ref: "f8d1ea90bc3" # https://steve-condylios.medium.com/how-to-set-up-devise-for-rails-7-466619f6d627
gem "devise-i18n" # https://github.com/tigrish/devise-i18n
gem "devise-bootstrap-views" # https://github.com/hisea/devise-bootstrap-views
gem "devise-i18n-bootstrap" # https://github.com/maximalink/devise-i18n-bootstrap

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development, :test do
  # RSpec testing framework as a drop-in alternative to Rails' default testing framework, Minitest
  gem 'rspec-rails', '~> 6.0.0' # https://github.com/rspec/rspec-rails
  # Factories instead of test fixtures
  gem 'factory_bot_rails' # https://github.com/thoughtbot/factory_bot_rails
  # Ruby static code analyzer (aka linter)
  # gem 'rubocop', '~> 1.23', require: false # https://github.com/rubocop-hq/rubocop
  # # Rails Extension for Rubocop
  # gem 'rubocop-rails', require: false # https://github.com/rubocop-hq/rubocop-rails
  # # rspec Extension for Rubocop
  # gem 'rubocop-rspec', require: false # https://github.com/rubocop-hq/rubocop-rspec
  # # Performance optimization analysis for your projects
  # gem 'rubocop-performance', require: false # https://github.com/rubocop-hq/rubocop-performance
  # # RSpec formatter compatible with GitHub Action's annotations
  # gem 'rspec-github', require: false # https://github.com/Drieam/rspec-github
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
