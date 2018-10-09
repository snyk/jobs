const test = require('tap').test;
const server = require('../fixtures/test-server');
const request = require('request-promise-native');

test('setup', async (t) => {
  await server.start();
  t.pass('server available');
});

test('/package/snyk responds', async (t) => {
  const res = await request('http://localhost:4545/package/snyk', {
    resolveWithFullResponse: true,
  });

  t.equal(res.statusCode, 200,
    'returns successful statuscode');
  t.equal(res.headers['content-type'], 'application/json; charset=utf-8',
    'correct content type returned');
});


test('teardown', async () => {
  server.stop();
});
