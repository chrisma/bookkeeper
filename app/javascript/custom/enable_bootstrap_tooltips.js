/*
 * Enable Bootstrap tooltips
 * https://getbootstrap.com/docs/5.2/components/tooltips/#enable-tooltips
 */

// https://turbo.hotwired.dev/reference/events
document.addEventListener('turbo:load', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}, false);