module.exports = {
  name: 'express',
  version: '4.17.1',
  dependencies: {
    accepts: {
      name: 'accepts',
      version: '1.3.7',
      dependencies: {
        'mime-types': {
          name: 'mime-types',
          version: '2.1.31',
          dependencies: {
            'mime-db': { name: 'mime-db', version: '1.48.0', dependencies: {} },
          },
        },
        negotiator: { name: 'negotiator', version: '0.6.2', dependencies: {} },
      },
    },
    'array-flatten': {
      name: 'array-flatten',
      version: '1.1.1',
      dependencies: {},
    },
    'body-parser': {
      name: 'body-parser',
      version: '1.19.0',
      dependencies: {
        bytes: { name: 'bytes', version: '3.1.0', dependencies: {} },
        'content-type': {
          name: 'content-type',
          version: '1.0.4',
          dependencies: {},
        },
        debug: {
          name: 'debug',
          version: '2.6.9',
          dependencies: {
            ms: { name: 'ms', version: '2.0.0', dependencies: {} },
          },
        },
        depd: { name: 'depd', version: '1.1.2', dependencies: {} },
        'http-errors': {
          name: 'http-errors',
          version: '1.7.2',
          dependencies: {
            depd: { name: 'depd', version: '1.1.2', dependencies: {} },
            inherits: { name: 'inherits', version: '2.0.3', dependencies: {} },
            setprototypeof: {
              name: 'setprototypeof',
              version: '1.1.1',
              dependencies: {},
            },
            statuses: { name: 'statuses', version: '1.5.0', dependencies: {} },
            toidentifier: {
              name: 'toidentifier',
              version: '1.0.0',
              dependencies: {},
            },
          },
        },
        'iconv-lite': {
          name: 'iconv-lite',
          version: '0.4.24',
          dependencies: {
            'safer-buffer': {
              name: 'safer-buffer',
              version: '2.1.2',
              dependencies: {},
            },
          },
        },
        'on-finished': {
          name: 'on-finished',
          version: '2.3.0',
          dependencies: {
            'ee-first': {
              name: 'ee-first',
              version: '1.1.1',
              dependencies: {},
            },
          },
        },
        qs: { name: 'qs', version: '6.7.0', dependencies: {} },
        'raw-body': {
          name: 'raw-body',
          version: '2.4.0',
          dependencies: {
            bytes: { name: 'bytes', version: '3.1.0', dependencies: {} },
            'http-errors': {
              name: 'http-errors',
              version: '1.7.2',
              dependencies: {
                depd: { name: 'depd', version: '1.1.2', dependencies: {} },
                inherits: {
                  name: 'inherits',
                  version: '2.0.3',
                  dependencies: {},
                },
                setprototypeof: {
                  name: 'setprototypeof',
                  version: '1.1.1',
                  dependencies: {},
                },
                statuses: {
                  name: 'statuses',
                  version: '1.5.0',
                  dependencies: {},
                },
                toidentifier: {
                  name: 'toidentifier',
                  version: '1.0.0',
                  dependencies: {},
                },
              },
            },
            'iconv-lite': {
              name: 'iconv-lite',
              version: '0.4.24',
              dependencies: {
                'safer-buffer': {
                  name: 'safer-buffer',
                  version: '2.1.2',
                  dependencies: {},
                },
              },
            },
            unpipe: { name: 'unpipe', version: '1.0.0', dependencies: {} },
          },
        },
        'type-is': {
          name: 'type-is',
          version: '1.6.18',
          dependencies: {
            'media-typer': {
              name: 'media-typer',
              version: '0.3.0',
              dependencies: {},
            },
            'mime-types': {
              name: 'mime-types',
              version: '2.1.31',
              dependencies: {
                'mime-db': {
                  name: 'mime-db',
                  version: '1.48.0',
                  dependencies: {},
                },
              },
            },
          },
        },
      },
    },
    'content-disposition': {
      name: 'content-disposition',
      version: '0.5.3',
      dependencies: {
        'safe-buffer': {
          name: 'safe-buffer',
          version: '5.1.2',
          dependencies: {},
        },
      },
    },
    'content-type': {
      name: 'content-type',
      version: '1.0.4',
      dependencies: {},
    },
    cookie: { name: 'cookie', version: '0.4.0', dependencies: {} },
    'cookie-signature': {
      name: 'cookie-signature',
      version: '1.0.6',
      dependencies: {},
    },
    debug: {
      name: 'debug',
      version: '2.6.9',
      dependencies: { ms: { name: 'ms', version: '2.0.0', dependencies: {} } },
    },
    depd: { name: 'depd', version: '1.1.2', dependencies: {} },
    encodeurl: { name: 'encodeurl', version: '1.0.2', dependencies: {} },
    'escape-html': { name: 'escape-html', version: '1.0.3', dependencies: {} },
    etag: { name: 'etag', version: '1.8.1', dependencies: {} },
    finalhandler: {
      name: 'finalhandler',
      version: '1.1.2',
      dependencies: {
        debug: {
          name: 'debug',
          version: '2.6.9',
          dependencies: {
            ms: { name: 'ms', version: '2.0.0', dependencies: {} },
          },
        },
        encodeurl: { name: 'encodeurl', version: '1.0.2', dependencies: {} },
        'escape-html': {
          name: 'escape-html',
          version: '1.0.3',
          dependencies: {},
        },
        'on-finished': {
          name: 'on-finished',
          version: '2.3.0',
          dependencies: {
            'ee-first': {
              name: 'ee-first',
              version: '1.1.1',
              dependencies: {},
            },
          },
        },
        parseurl: { name: 'parseurl', version: '1.3.3', dependencies: {} },
        statuses: { name: 'statuses', version: '1.5.0', dependencies: {} },
        unpipe: { name: 'unpipe', version: '1.0.0', dependencies: {} },
      },
    },
    fresh: { name: 'fresh', version: '0.5.2', dependencies: {} },
    'merge-descriptors': {
      name: 'merge-descriptors',
      version: '1.0.1',
      dependencies: {},
    },
    methods: { name: 'methods', version: '1.1.2', dependencies: {} },
    'on-finished': {
      name: 'on-finished',
      version: '2.3.0',
      dependencies: {
        'ee-first': { name: 'ee-first', version: '1.1.1', dependencies: {} },
      },
    },
    parseurl: { name: 'parseurl', version: '1.3.3', dependencies: {} },
    'path-to-regexp': {
      name: 'path-to-regexp',
      version: '0.1.7',
      dependencies: {},
    },
    'proxy-addr': {
      name: 'proxy-addr',
      version: '2.0.7',
      dependencies: {
        forwarded: { name: 'forwarded', version: '0.2.0', dependencies: {} },
        'ipaddr.js': { name: 'ipaddr.js', version: '1.9.1', dependencies: {} },
      },
    },
    qs: { name: 'qs', version: '6.7.0', dependencies: {} },
    'range-parser': {
      name: 'range-parser',
      version: '1.2.1',
      dependencies: {},
    },
    'safe-buffer': { name: 'safe-buffer', version: '5.1.2', dependencies: {} },
    send: {
      name: 'send',
      version: '0.17.1',
      dependencies: {
        debug: {
          name: 'debug',
          version: '2.6.9',
          dependencies: {
            ms: { name: 'ms', version: '2.0.0', dependencies: {} },
          },
        },
        depd: { name: 'depd', version: '1.1.2', dependencies: {} },
        destroy: { name: 'destroy', version: '1.0.4', dependencies: {} },
        encodeurl: { name: 'encodeurl', version: '1.0.2', dependencies: {} },
        'escape-html': {
          name: 'escape-html',
          version: '1.0.3',
          dependencies: {},
        },
        etag: { name: 'etag', version: '1.8.1', dependencies: {} },
        fresh: { name: 'fresh', version: '0.5.2', dependencies: {} },
        'http-errors': {
          name: 'http-errors',
          version: '1.7.3',
          dependencies: {
            depd: { name: 'depd', version: '1.1.2', dependencies: {} },
            inherits: { name: 'inherits', version: '2.0.4', dependencies: {} },
            setprototypeof: {
              name: 'setprototypeof',
              version: '1.1.1',
              dependencies: {},
            },
            statuses: { name: 'statuses', version: '1.5.0', dependencies: {} },
            toidentifier: {
              name: 'toidentifier',
              version: '1.0.0',
              dependencies: {},
            },
          },
        },
        mime: { name: 'mime', version: '1.6.0', dependencies: {} },
        ms: { name: 'ms', version: '2.1.1', dependencies: {} },
        'on-finished': {
          name: 'on-finished',
          version: '2.3.0',
          dependencies: {
            'ee-first': {
              name: 'ee-first',
              version: '1.1.1',
              dependencies: {},
            },
          },
        },
        'range-parser': {
          name: 'range-parser',
          version: '1.2.1',
          dependencies: {},
        },
        statuses: { name: 'statuses', version: '1.5.0', dependencies: {} },
      },
    },
    'serve-static': {
      name: 'serve-static',
      version: '1.14.1',
      dependencies: {
        encodeurl: { name: 'encodeurl', version: '1.0.2', dependencies: {} },
        'escape-html': {
          name: 'escape-html',
          version: '1.0.3',
          dependencies: {},
        },
        parseurl: { name: 'parseurl', version: '1.3.3', dependencies: {} },
        send: {
          name: 'send',
          version: '0.17.1',
          dependencies: {
            debug: {
              name: 'debug',
              version: '2.6.9',
              dependencies: {
                ms: { name: 'ms', version: '2.0.0', dependencies: {} },
              },
            },
            depd: { name: 'depd', version: '1.1.2', dependencies: {} },
            destroy: { name: 'destroy', version: '1.0.4', dependencies: {} },
            encodeurl: {
              name: 'encodeurl',
              version: '1.0.2',
              dependencies: {},
            },
            'escape-html': {
              name: 'escape-html',
              version: '1.0.3',
              dependencies: {},
            },
            etag: { name: 'etag', version: '1.8.1', dependencies: {} },
            fresh: { name: 'fresh', version: '0.5.2', dependencies: {} },
            'http-errors': {
              name: 'http-errors',
              version: '1.7.3',
              dependencies: {
                depd: { name: 'depd', version: '1.1.2', dependencies: {} },
                inherits: {
                  name: 'inherits',
                  version: '2.0.4',
                  dependencies: {},
                },
                setprototypeof: {
                  name: 'setprototypeof',
                  version: '1.1.1',
                  dependencies: {},
                },
                statuses: {
                  name: 'statuses',
                  version: '1.5.0',
                  dependencies: {},
                },
                toidentifier: {
                  name: 'toidentifier',
                  version: '1.0.0',
                  dependencies: {},
                },
              },
            },
            mime: { name: 'mime', version: '1.6.0', dependencies: {} },
            ms: { name: 'ms', version: '2.1.1', dependencies: {} },
            'on-finished': {
              name: 'on-finished',
              version: '2.3.0',
              dependencies: {
                'ee-first': {
                  name: 'ee-first',
                  version: '1.1.1',
                  dependencies: {},
                },
              },
            },
            'range-parser': {
              name: 'range-parser',
              version: '1.2.1',
              dependencies: {},
            },
            statuses: { name: 'statuses', version: '1.5.0', dependencies: {} },
          },
        },
      },
    },
    setprototypeof: {
      name: 'setprototypeof',
      version: '1.1.1',
      dependencies: {},
    },
    statuses: { name: 'statuses', version: '1.5.0', dependencies: {} },
    'type-is': {
      name: 'type-is',
      version: '1.6.18',
      dependencies: {
        'media-typer': {
          name: 'media-typer',
          version: '0.3.0',
          dependencies: {},
        },
        'mime-types': {
          name: 'mime-types',
          version: '2.1.31',
          dependencies: {
            'mime-db': { name: 'mime-db', version: '1.48.0', dependencies: {} },
          },
        },
      },
    },
    'utils-merge': { name: 'utils-merge', version: '1.0.1', dependencies: {} },
    vary: { name: 'vary', version: '1.1.2', dependencies: {} },
  },
};
