document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
})