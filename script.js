// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let darkMode = localStorage.getItem('darkMode') === 'true'; // Check local storage for preference

// If no preference or preference is dark, set to light mode initially
if (localStorage.getItem('darkMode') === null || darkMode) {
  darkMode = false;
  localStorage.setItem('darkMode', darkMode);
}
function updateMode() {
  if (darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

modeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);
  updateMode();
});

updateMode();

// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mainNav = document.getElementById('mainNav');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  mainNav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    mainNav.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
    hamburgerMenu.classList.remove('active');
    mainNav.classList.remove('active');
  }
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.hero-section, .about-section, .skills-section, .projects-section, .contact-section, .skills-card, .project-card');
animatedElements.forEach(el => {
  observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Contact Form Submission 
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

