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
//# sourceMappingURL=main.js.map