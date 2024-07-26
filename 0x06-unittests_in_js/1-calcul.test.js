const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when adding 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when subtracting 4.5 from 1.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.6), -5);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when dividing 1.4 by 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle dividing 0 by a number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid type', function() {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
  });
});
