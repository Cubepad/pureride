window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 1) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        menuBtn.querySelector('.menu-icon').textContent = 
            navLinks.classList.contains('active') ? 'close' : 'menu';
    };

    menuBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target) ||
            e.target.closest('a')) {
            navLinks.classList.remove('active');
            menuBtn.querySelector('.menu-icon').textContent = 'menu';
        }
    });
});

document.getElementById("year").textContent = new Date().getFullYear();