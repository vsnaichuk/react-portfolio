export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then(function () {
        console.log('Service worker registered!');
      });
  }
}
