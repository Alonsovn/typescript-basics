"use strict";
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    var error2 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 10;
    };
    error("Auxilio!");
    console.log("Hi!");
})();
