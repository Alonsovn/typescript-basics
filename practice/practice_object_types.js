"use strict";
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
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
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Angel"],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
