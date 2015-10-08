/*globals, exports */

var fizzbuzz = {
        getResult: function (number) {
            if (0 === 0) {
                return number;
            } else if (number % 3 === 0) {
                return ("fizz");
            } else if (number % 5 === 0) {
                return ("buzz");
            } else if (number % 3 === 0 && number % 5 === 0) {
                return ("fizz buzz");
            } else {
                return number;
            }
        }
};

            exports.fizzbuzz = fizzbuzz;