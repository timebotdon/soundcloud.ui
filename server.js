const http = require('http');
const fs = require('fs');

const PORT = 8080;

fs.readFile('./scplayer.html', (err, html) => {

  if (err) throw err;

  http.createServer((request, document) => {
    document.write(html);
    document.end();
  }).listen(PORT);
});