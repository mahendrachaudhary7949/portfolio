// Dark mode toggle
const themeCheckbox = document.getElementById('themeCheckbox');
const html = document.documentElement;

// Restore saved preference
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  themeCheckbox.checked = true;
}

themeCheckbox.addEventListener('change', () => {
  if (themeCheckbox.checked) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Project preview hover
const rows = document.querySelectorAll('.project-row');
const previewFrame = document.getElementById('previewFrame');
const placeholder = document.getElementById('previewPlaceholder');
let hoverTimer;

rows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    rows.forEach(r => r.classList.remove('active'));
    row.classList.add('active');
    const url = row.getAttribute('data-url');
    if (url) {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        previewFrame.src = url;
        previewFrame.classList.add('active');
        placeholder.style.display = 'none';
      }, 300);
    }
  });
  row.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimer);
  });
});

// Contact form
function sendMessage() {
  const name = document.querySelector('.contact-form input[type="text"]').value;
  const email = document.querySelector('.contact-form input[type="email"]').value;
  const msg = document.querySelector('.contact-form textarea').value;
  
  if (!name || !email || !msg) { 
    alert('Please fill in all fields.'); 
    return; 
  }
  
  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + msg);
  window.location.href = 'mailto:mc9275887@gmail.com?subject=' + subject + '&body=' + body;
}