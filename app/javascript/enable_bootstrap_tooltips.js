/*
 * Enable Bootstrap tooltips
 * https://getbootstrap.com/docs/5.2/components/tooltips/#enable-tooltips
 */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
