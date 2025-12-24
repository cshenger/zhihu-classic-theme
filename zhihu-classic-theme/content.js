// Zhihu Classic Theme Content Script
console.log("Zhihu Classic Theme Loaded: Restoring the blue header...");

// Add a class to the body to indicate the theme is active
// This allows for potential specific CSS scoping if needed in the future
document.documentElement.classList.add('zhihu-classic-theme-active');

// Optional: Observe DOM changes if we need to fix specific dynamic elements
// For now, CSS !important should handle most visual overrides.

const logoUrl = typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL ? chrome.runtime.getURL('images/logo.png') : null;
function applyLogo() {
  if (!logoUrl) return;
  const els = document.querySelectorAll('.AppHeader-logo, a[aria-label="知乎"]');
  els.forEach((el) => {
    el.style.backgroundImage = `url("${logoUrl}")`;
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundPosition = 'center center';
    el.style.backgroundSize = '64px auto';
  });
}
function init() {
  applyLogo();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
const observer = new MutationObserver(() => applyLogo());
observer.observe(document.documentElement, { childList: true, subtree: true });
