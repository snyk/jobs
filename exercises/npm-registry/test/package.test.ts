import * as getPort from 'get-port';
import got from 'got';
import { Server } from 'http';
import { createApp } from '../src/app';

describe('/package/:name/:version endpoint', () => {
  let server: Server;
  let port: number;

  beforeAll(async (done) => {
    port = await getPort();
    server = createApp().listen(port, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('responds', async () => {
    const packageName = 'react';
    const packageVersion = '16.13.0';

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json();

    expect(res.name).toEqual(packageName);
    expect(res.version).toEqual(packageVersion);
  });

  it('returns dependencies', async () => {
    const packageName = 'react';
    const packageVersion = '16.13.0';

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json();

    expect(res.dependencies).toEqual({
      'loose-envify': '^1.1.0',
      'object-assign': '^4.1.1',
      'prop-types': '^15.6.2',
    });
  });

  it('returns no deep dependencies if no dependencies', async () => {
    const packageName = 'js-tokens';
    const packageVersion = '1.0.1';

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json();

    expect(res.transitiveDeps).toBeUndefined();
  });

  it('returns deep dependencies', async () => {
    const packageName = 'react';
    const packageVersion = '16.13.0';

    const res: any = await got(
      `http://localhost:${port}/package/${packageName}/${packageVersion}`,
    ).json();

    expect(res.transitiveDeps.length).toEqual(3);

    // Full check first transitive dependency only
    expect(res.transitiveDeps[0].name).toEqual('loose-envify');
    expect(res.transitiveDeps[0].version).toEqual('1.4.0');
    expect(res.transitiveDeps[0].dependencies).toEqual({ 'js-tokens': '^3.0.0 || ^4.0.0' });
    expect(res.transitiveDeps[0].transitiveDeps.length).toEqual(1);

    expect(res.transitiveDeps[0].transitiveDeps[0].name).toEqual('js-tokens');
    expect(res.transitiveDeps[0].transitiveDeps[0].version).toEqual('3.0.2');
    expect(res.transitiveDeps[0].transitiveDeps[0].dependencies).toBeUndefined();
    expect(res.transitiveDeps[0].transitiveDeps[0].transitiveDeps).toBeUndefined();
  });
});
