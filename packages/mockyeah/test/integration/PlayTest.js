'use strict';

const async = require('async');
const { expect } = require('chai');
const TestHelper = require('../TestHelper');

const { mockyeah, request } = TestHelper;

describe('Play', function() {
  it('should play a custom suite', function(done) {
    mockyeah.play('some-custom-suite');

    /**
     * Make many requests in series, waits to execute `done`
     * until all complete.
     */
    async.series(
      [
        cb => request.get('/path+includes+problem+characters').expect(200, /it worked/, cb),
        cb => request.get('/say-hello').expect(200, /hello there/, cb),
        cb => request.get('/say-oh-noes').expect(500, /Oh noes/, cb),
        cb => request.get('/say-your-lost').expect(404, /I'm lost/, cb),
        cb => request.get('/respond-with-a-file').expect(200, /Hugo/, cb),
        cb => request.get('/respond-with-a-fixture').expect(200, /Desmond/, cb),
        cb => {
          const latency = 1000;
          const threshold = latency + 200;
          const start = new Date().getTime();

          request
            .get('/wait-to-respond')
            .expect(200, /Oh, hey there/, done)
            .expect(() => {
              const now = new Date().getTime();
              const duration = now - start;
              expect(duration).to.be.within(latency, threshold);
            }, cb);
        }
      ],
      done
    );
  });

  it('should play multiple custom suites at once with array', function(done) {
    mockyeah.play(['some-custom-suite', 'some-custom-suite-2']);

    async.series(
      [
        cb => request.get('/path+includes+problem+characters').expect(200, /it worked/, cb),
        cb => request.get('/say-hello').expect(200, /hello there/, cb),
        cb => request.get('/say-oh-noes').expect(500, /Oh noes/, cb),
        cb => request.get('/say-your-lost').expect(404, /I'm lost/, cb),
        cb => request.get('/respond-with-a-file').expect(200, /Hugo/, cb),
        cb => request.get('/respond-with-a-fixture').expect(200, /Desmond/, cb),
        cb => request.get('/custom-suite-2').expect(200, /it worked/, cb)
      ],
      done
    );
  });

  it('should play multiple custom suites at once with string', function(done) {
    mockyeah.play('some-custom-suite , some-custom-suite-2');

    async.series(
      [
        cb => request.get('/path+includes+problem+characters').expect(200, /it worked/, cb),
        cb => request.get('/say-hello').expect(200, /hello there/, cb),
        cb => request.get('/say-oh-noes').expect(500, /Oh noes/, cb),
        cb => request.get('/say-your-lost').expect(404, /I'm lost/, cb),
        cb => request.get('/respond-with-a-file').expect(200, /Hugo/, cb),
        cb => request.get('/respond-with-a-fixture').expect(200, /Desmond/, cb),
        cb => request.get('/custom-suite-2').expect(200, /it worked/, cb)
      ],
      done
    );
  });
});
