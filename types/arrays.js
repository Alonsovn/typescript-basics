"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ["Omega Rojo", "Dormamu", "Duende verde"];
    numbers.push(11);
    villians.forEach(function (v) { return console.log(v.toLowerCase()); });
    console.log(numbers);
})();
