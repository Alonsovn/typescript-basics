"use strict";
(function () {
    // lastName parameter is optional
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "no lastname");
    };
    var name = fullName("Tony", "Stark");
    console.log(name);
})();
