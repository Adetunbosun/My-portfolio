const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-list-item');

openBtn.addEventListener('click', () => {
  nav.classList.add('active');
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  closeBtn.style.display = 'none';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    closeBtn.style.display = 'none';
  });
});