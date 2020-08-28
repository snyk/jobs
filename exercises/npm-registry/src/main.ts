import { createApp } from './app';
import * as getPort from 'get-port';

const DEFAULT_PORT = 3000;

async function main() {
  // Initialise the server framework and routing
  const server = createApp();

  // Attempt to get the default port, otherwise choose for us
  const port = await getPort({ port: DEFAULT_PORT });

  server.listen(port);

  console.info(`Server listening at http://localhost:${port}`);
}

main();
