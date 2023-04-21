"use strict";
(function () {
    // optional args must be at the end
    var fullName = function (firstName, lastName, isUpper) {
        if (isUpper === void 0) { isUpper = false; }
        if (isUpper) {
            return "".concat(firstName, " ").concat(lastName || "no lastname").toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || "no lastname");
        }
    };
    var name = fullName("Tony", "Stark");
    console.log(name);
})();
