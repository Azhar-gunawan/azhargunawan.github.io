if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('js/sw.js')
      .then(reg => console.log('Service Worker registered ✅', reg))
      .catch(err => console.log('Service Worker failed ❌', err));
  });
}
    
