process.env.NODE_ENV = 'test';

var server = require("http-server").createServer();
var browser = require('zombie');
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
});
