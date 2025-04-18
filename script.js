// Fade in body content (for future expansion: sections)
document.addEventListener('DOMContentLoaded', () => {
  // Animate elements if needed (already CSS-animated here)

  // CTA Button click animation
  const ctaBtn = document.getElementById('ctaBtn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      ctaBtn.textContent = 'Loading...';
      ctaBtn.style.transform = 'scale(0.92)';
      setTimeout(() => {
        ctaBtn.textContent = 'Get Started';
        ctaBtn.style.transform = '';
      }, 1200);
    });
  }
});
