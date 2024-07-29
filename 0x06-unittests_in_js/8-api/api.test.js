const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(apiUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(apiUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct content-type', (done) => {
    request.get(apiUrl, (error, response) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
