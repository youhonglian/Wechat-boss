const webSocketServer = require('webSocket').server
const http = require('http')
const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('WELCOME TO CONNECT BOSS');
})
var wsServer = new webSocketServer({
  httpServer:httpServer,
  autoAcceptConnection:true
});
server.listen('3000', '127.0.0.1', () => {
  console.log('服务器已经运行');
})
