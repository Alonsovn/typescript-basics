"use strict";
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return "Batisignal active!";
    };
    console.log(typeof activateBatiSignal);
    console.log(returnName());
})();
