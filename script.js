// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    if(this.hash){
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({behavior: "smooth"});
    }
  });
});

// Remove cursor from typing effect after animation
window.addEventListener('DOMContentLoaded', function(){
  const h1 = document.querySelector('h1.typingAnim');
  setTimeout(() => {
    h1.style.borderRight = 'none';
  }, 2300);
});
