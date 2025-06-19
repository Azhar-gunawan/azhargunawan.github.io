if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('js/sw.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);

      // Cek apakah service worker telah diperbarui
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Ada versi baru! Force refresh
              console.log('New or updated content is available.');

              // Optional: reload page atau tampilkan notifikasi ke user
              window.location.reload(); // auto reload
              // atau tampilkan notifikasi dan tunggu user klik "Refresh"
            } else {
              console.log('Content is now available offline!');
            }
          }
        };
      };
    }).catch(error => {
      console.error('Error during service worker registration:', error);
    });
  });
}
