const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
	this.timeout(5000);
	const apiUrl = 'http://localhost:7865';

	it('should return correct status code', (done) => {
		request.get(apiUrl, (error, response) => {
		  if (error) {
			console.error('Error:', error);
			return done(error);
		  }
		  expect(response.statusCode).to.equal(200);
		  done();
		});
	  });
	
	  it('should return correct result', (done) => {
		request.get(apiUrl, (error, response, body) => {
		  if (error) {
			console.error('Error:', error);
			return done(error);
		  }
		  expect(body).to.equal('Welcome to the payment system');
		  done();
		});
	  });
	});

	describe('Available payments', function() {
		this.timeout(5000);
		const apiUrl = 'http://localhost:7865';
	  
		it('should return correct response', (done) => {
		  request.get(`${apiUrl}/available_payments`, (error, response, body) => {
			if (error) {
			  console.error('Error:', error);
			  return done(error);
			}
			expect(response.statusCode).to.equal(200);
			const expectedResponse = {
			  payment_methods: {
				credit_cards: true,
				paypal: false
			  }
			};
			expect(JSON.parse(body)).to.deep.equal(expectedResponse);
			done();
		  });
		});
	  });
	  
	  describe('Login', function() {
		this.timeout(5000);
		const apiUrl = 'http://localhost:7865';
	  
		it('should return correct response', (done) => {
		  const options = {
			url: `${apiUrl}/login`,
			method: 'POST',
			json: { userName: 'Betty' }
		  };
		  request(options, (error, response, body) => {
			if (error) {
			  console.error('Error:', error);
			  return done(error);
			}
			expect(response.statusCode).to.equal(200);
			expect(body).to.equal('Welcome Betty');
			done();
		  });
		});
	  });
