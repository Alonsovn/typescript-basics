"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hi ".concat(name, "!"); };
    var saveTheWorld = function () { return "The world is saved!"; };
    var myFunction1;
    var myFunction2;
    var myFunction3;
    //   let myFunction: Function;
    //   let myFunction; // Type any
    //   myFunction = 10;
    //   console.log(myFunction);
    myFunction1 = addNumber;
    console.log(myFunction1(7, 10));
    myFunction2 = greet;
    console.log(myFunction2("Alonso"));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
