const http = require('http');
const app = require('../../app');

const port = process.env.PORT || '4545';
app.set('port', port);

const server = http.createServer(app);

module.exports = {
  server,
  start(onListening = () => {}) {
    server.listen(port);
    server.on('listening', onListening);
    return server;
  },
  stop() {
    server.close();
  },
};
