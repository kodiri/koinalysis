var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=eea12fa8b37548329f52cb2e133f55ab';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })