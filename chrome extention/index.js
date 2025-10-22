alert('index.js loaded');

// Inject Tailwind CSS CDN
const tailwindLink = document.createElement('script');
tailwindLink.src = "https://cdn.tailwindcss.com";
document.head.appendChild(tailwindLink);

// Reference body
const body = document.body;

// Optional: body background
body.id = 'BG_';
body.style.background = 'none';
body.style.backgroundColor = 'transparent';
body.className = 'bg-gradient-to-r from-green-400 to-blue-500';

// Apply background color only where needed
document.querySelectorAll('*').forEach(el => {
  if (el.tagName !== 'SPAN') {
    el.style.background = 'none';
    el.style.backgroundColor = 'black'; // or any other
  }
});

// Specific element styles
document.querySelectorAll('table').forEach(el => {
  el.style.background = 'none';
  el.style.backgroundColor = 'purple';
});

document.querySelectorAll('input').forEach(el => {
  el.style.background = 'none';
  el.style.backgroundColor = 'cyan';
});

document.querySelectorAll('div').forEach(el => {
  el.style.background = 'none';
  el.style.color = 'purple';
});

document.querySelectorAll('span').forEach(el => {
  el.style.background = 'none';
  el.style.color = 'purple';
});

document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
  el.style.background = 'none';
  el.style.color = 'blue';
});
document.background = 'fixed inset-0 bg-gradient-to-r from-green-400 to-blue-500 -z-10';

// Add overlay gradient behind content
const overlay = document.createElement('div');
overlay.className = 'fixed inset-0 bg-gradient-to-r from-green-400 to-blue-500 -z-10';
body.prepend(overlay);
