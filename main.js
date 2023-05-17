"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 32,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
    console.log(superman);
})();
(() => {
    const client1 = {
        name: "alonso",
        age: 29,
        address: {
            id: 12,
            zip: "ADFG 23",
            city: "Heredia",
        },
    };
    const client2 = {
        name: "Maria",
        age: 18,
        address: {
            id: 32,
            zip: "HEGB 43",
            city: "Cartago",
        },
    };
})();
//# sourceMappingURL=main.js.map