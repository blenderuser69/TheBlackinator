alert('index.js loaded');

//Inject Tailwind CSS CDN
const tailwindLink = document.createElement('script');
tailwindLink.src = "https://cdn.tailwindcss.com";
document.head.appendChild(tailwindLink);

//create or referance an element(from html)
const body = document.body;

//add atributes/properties
body.id = 'BG_';
body.style.background = 'none';
body.style.backgroundColor = 'transparent';
body.className = 'bg-gradient-to-r from-green-400 to-blue-500';

//apply background to all elements
document.querySelectorAll('*').forEach(el => {
  el.style.background = 'none';//or none
  el.style.backgroundColor = 'black';//or transparent
});

document.querySelectorAll('table').forEach(el => {
  el.style.background = 'none';//or none
  el.style.backgroundColor = 'prurple';//or transparent
});

document.querySelectorAll('input').forEach(el => {
  el.style.background = 'none';//or none
  el.style.backgroundColor = 'blue';//or transparent
});

document.querySelectorAll('br').forEach(el => {
  el.style.background = 'none';//or none
  el.style.backgroundColor = 'red';//or transparent
});

// Add overlay gradient behind content
const overlay = document.createElement('div');
overlay.className = 'fixed inset-0 bg-gradient-to-r from-green-400 to-blue-500 -z-10';
body.prepend(overlay);
