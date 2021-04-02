import * as express from 'express';
import { getPackage } from './package';
import * as path from 'path';

/**
 * Bootstrap the application framework
 */
export function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/package/:name/:version', getPackage);

  app.get(['/', '/index.html'], function(req, res) {
      // Running out of /dist, but static file isn't copied in there for some reason...
      res.sendFile(path.join(__dirname + '/../index.html'));
  });

  return app;
}
