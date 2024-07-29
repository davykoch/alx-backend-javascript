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
});

describe('Cart page', () => {
  const apiUrl = 'http://localhost:7865';

  it('should return correct status code when :id is a number', (done) => {
    request.get(`${apiUrl}/cart/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get(`${apiUrl}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request.get(`${apiUrl}/cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
