// Create a web server that listens on port 3000. It should respond to a GET request to /comments with a JSON object that looks like this:

// {
//   comments: [
//     { username: "Todd", comment: "lol that is so funny" },
//     { username: "Skyler", comment: "I like to go birdwatching with my dog" },
//     { username: "Sk8erBoi", comment: "Plz delete your account, Todd" },
//     { username: "onlysayswoof", comment: "woof woof woof" }
//   ]
// }
// The server should send back the JSON object above when it receives a GET request to the /comments path.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const comments = fs.readFileSync('./comments.json', 'utf8');
    res.end(comments);
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// The server is listening on port 3000. When a GET request is made to /comments, the server reads the contents of comments.json and sends it as the response.