self.addEventListener('fetch', function(event) {
  console.log("Request:", event.request);
});