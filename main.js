"use strict";
(function () {
    var a = 10;
    console.log(a);
})();
(function () {
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
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "No lastname");
    };
    var name = fullName("Tony", "Stark");
    var name2 = fullName("Tony");
    console.log(name);
    console.log(name2);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName("Tony", "Stark");
    console.log(name);
})();
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
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hi ".concat(name, "!"); };
    var saveTheWorld = function () { return "The world is saved!"; };
    var myFunction1;
    var myFunction2;
    var myFunction3;
    myFunction1 = addNumber;
    console.log(myFunction1(7, 10));
    myFunction2 = greet;
    console.log(myFunction2("Alonso"));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
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
    };
    console.log(flash);
    console.log(superman);
})();
(function () {
    var myCustomVariable = "Alonso";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    console.log("Log 1");
    var bumblebee = {
        carroceria: "Amarillo con Negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        },
    };
    var villanos = [
        {
            nombre: "Lex Luthor",
            edad: 52,
            mutante: false,
        },
        {
            nombre: "Erick Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    console.log("Log 2");
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Angel"],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log("Log 3");
})();
(function () {
    var avenger = 124;
    var exist;
    var power;
    avenger = "Dr Stange";
    console.log(avenger.charAt(0));
    avenger = 150.235532;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ["Omega Rojo", "Dormamu", "Duende verde"];
    numbers.push(11);
    villians.forEach(function (v) { return console.log(v.toLowerCase()); });
    console.log(numbers);
    numbers.forEach(function (n) { return console.log(n); });
})();
(function () {
    var isSuperman;
    isSuperman = true;
    console.log({ isSuperman: isSuperman });
    console.log(isSuperman);
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
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
(function () {
    var avengers = 50;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("We are in troubles!");
    }
    else {
        console.log("We are safe!");
    }
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna Verde";
    var volcanoNegro = "H\u00E9roe Volcan Negro";
    console.log("I'm ".concat(batman));
    console.log(batman.toLocaleUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || "No present");
})();
(function () {
    var hero = ["Dr Strange", 100];
    hero[0] = "Ironman";
    hero[1] = 50;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map