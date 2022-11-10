// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

/*
 * Libraries
 */
import "@hotwired/turbo-rails"
// import { Turbo } from "@hotwired/turbo-rails"
// Turbo.session.drive = false

import "controllers"
// You must include popper.min.js before bootstrap.js
// https://getbootstrap.com/docs/5.2/components/tooltips/
import "popper"
import "bootstrap"

/*
 * Custom JS
 */
import "./custom/enable_bootstrap_tooltips" // app/javascript/custom/enable_bootstrap_tooltips.js
