process.env.NODE_ENV = 'test';

var server = require("http-server").createServer();
var Browser = require('zombie');
var assert = require('chai').assert;

describe('home page', function() {

    before(function() {
        server.listen(3000);
        browser = new Browser({
            site: "http://localhost:3000"
        });
    });

    before(function(done) {
        browser.visit('/', done);
    });

    it('has status 200', function() {
      browser.assert.status(200);
    });

    // it('has title', function() {
    //
    // });
    //
    // it('has content', function() {
    //
    // });
});
