// Create a web server
// Create a web server that listens on port 3000. When you visit http://localhost:3000/ you should see the text "Hello, World!".
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});