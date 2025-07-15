// script.js

// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Example: Call to Action Button Analytics (placeholder)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function () {
    console.log(`CTA Button clicked: ${this.textContent.trim()}`);
    // Future: integrate Google Tag Manager or analytics here
  });
});
