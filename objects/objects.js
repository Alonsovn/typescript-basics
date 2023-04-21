"use strict";
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    var superman = {
        name: "Clark Kent",
        age: 32,
        powers: ["Super velocidad"],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
    console.log(superman);
})();
