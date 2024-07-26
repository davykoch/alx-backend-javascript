const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when adding 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when subtracting 4.5 from 1.4', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -1.4, 3.6)).to.equal(-5);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle dividing 0 by a number', function() {
      expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid type', function() {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error);
    });
  });
});
