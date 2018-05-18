self.addEventListener('fetch', function(event) {
  console.log("Waiting", event.request);
});