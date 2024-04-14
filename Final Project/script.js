const menuButton = document.querySelector('.menu-button'); // Replace with your button selector
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');  // Add/remove 'show' class for menu visibility
});
