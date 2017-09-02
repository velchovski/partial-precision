var assert = require('chai').assert;
var pEq = require('../lib');

describe('pEq.integer', () => {
    it('compares with full precision two small integers', () => {
        let areEqual = pEq.integer(1, 2);
        assert.typeOf(areEqual, 'boolean');
        assert.equal(areEqual, false);
    });
    it ('compares as equal two equal numbers', () => {
        let number = Math.round(Math.random() * 100);
        let areEqual = pEq.integer(number, number);
        assert.typeOf(areEqual, 'boolean');
        assert.equal(areEqual, true);
    });
    it('compares with full precision two integers less than 100', () => {
        let areEqual = pEq.integer(20, 30);
        assert.typeOf(areEqual, 'boolean');
        assert.equal(areEqual, false);
    });
    it('compares with partial precision two numbers larger than 1000', () => {
        let areEqual = pEq.integer(1500, 1505);
        assert.typeOf(areEqual, 'boolean');
        assert.equal(areEqual, true);
    });
    it('compares numbers correctly with specified precision', () => {
        let precision = 200;
        let areEqual = pEq.integer(100250, 100450);
        assert.typeOf(areEqual, 'boolean');
        assert.equal(areEqual, true);
    });
});
