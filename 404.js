// This script helps with client-side routing on GitHub Pages
// It redirects 404s to the index.html page with the original URL as a query parameter
(function() {
  const path = window.location.pathname;
  const redirectUrl = path.replace(/\/[^/]*$/, '/') || '/';
  window.location.replace(redirectUrl);
})();