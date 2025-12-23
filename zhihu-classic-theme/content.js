// Zhihu Classic Theme Content Script
console.log("Zhihu Classic Theme Loaded: Restoring the blue header...");

// Add a class to the body to indicate the theme is active
// This allows for potential specific CSS scoping if needed in the future
document.documentElement.classList.add('zhihu-classic-theme-active');

// Optional: Observe DOM changes if we need to fix specific dynamic elements
// For now, CSS !important should handle most visual overrides.
