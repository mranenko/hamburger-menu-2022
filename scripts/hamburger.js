const Hamburger = {
  toggle: document.querySelector('.hamburger-toggle'),
  nav: document.querySelector('.hamburger-nav'),

  initialize() {
    this.toggle.addEventListener('click', (event) => {
      this.toggleNav(event);
    });
  },

  toggleNav(event) {
    event.preventDefault();
    this.toggle.classList.toggle('active');
    this.nav.classList.toggle('active');
  },
};

document.addEventListener('DOMContentLoaded', () => {
  Hamburger.initialize();
});
