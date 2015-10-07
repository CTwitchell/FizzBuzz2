/*globals require, describe, it, expect*/

var fizzBuzz = require("../fizzbuzz.js");

(function () {
    'use strict';

    describe('fizz buzz', function () {
        it('should return 0 given 0', function () {
            var result = fizzBuzz.getResult(0);
            expect(result.toEqual(0));
        });
    });
}());