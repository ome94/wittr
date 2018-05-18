self.addEventListener('fetch', function(event) {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
  // Ensure the Content-Type of the response is "text/html"
  event.respondWith(
    new Response('<h1>Hello</h1><p><strong class = "a-winner-is-me">I came, I saw, I conquered.<strong></p>',{
      headers : {'Content-Type' : 'text/html'}
    })
  );
});