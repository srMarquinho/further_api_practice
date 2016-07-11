var expect = require('chai').expect;
var should = require('chai').should;
var sinon = require('sinon');
var xhr = sinon.useFakeXMLHttpRequest();
var getNews = require('../../src/js/getNews').getNews;

describe('new feed', function() {

  before(function(done){
    sinon
      .stub(request, 'get')
      .yields(JSON.stringify({login: "bulkan"}));
    done();
  });

  it('can get a news item', function() {

  });
});
