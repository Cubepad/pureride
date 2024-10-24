window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 1) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

document.getElementById("year").textContent = new Date().getFullYear();