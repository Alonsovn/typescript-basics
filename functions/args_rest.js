"use strict";
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(args.join(" "));
    };
    var superman = fullName("Clark", "Joseph", "Kent");
    console.log(superman);
    console.log({ superman: superman });
})();
