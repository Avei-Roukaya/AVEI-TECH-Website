// main.js - header mobile toggle + contact form placeholder
document.addEventListener('DOMContentLoaded',function(){
  // year in footer
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});

function toggleMenu(){
  const mobileMenu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.mobile-toggle');
  if(!mobileMenu) return;
  const shown = mobileMenu.classList.toggle('show');
  mobileMenu.setAttribute('aria-hidden', shown ? 'false' : 'true');
  if(btn) btn.setAttribute('aria-expanded', shown ? 'true' : 'false');
}

// If later you add front-end contact handling for index (e.g. newsletter), you can add functions here.
