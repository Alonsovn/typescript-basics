"use strict";
(function () {
    // lastName parameter is optional
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "No lastname");
    };
    var name = fullName("Tony", "Stark");
    var name2 = fullName("Tony");
    console.log(name);
    console.log(name2);
})();
