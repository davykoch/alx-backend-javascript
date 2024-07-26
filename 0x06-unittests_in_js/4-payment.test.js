const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function() {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the stub and spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub Utils.calculateNumber and verify its usage', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log is called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
