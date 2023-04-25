"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L Jackson",
        ironman: "Rober D Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.12434233,
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(3), vision.toUpperCase());
    const printAvenger = (_a) => {
        var { ironman } = _a, restArgs = __rest(_a, ["ironman"]);
        console.log(ironman);
        console.log(restArgs);
    };
    printAvenger(avengers);
    const avengerArr = ["Captin America", "Ironman", "Hulk"];
    const avengerTuple = [
        "Captin America",
        true,
        13.42,
    ];
    const [cap, ironman] = avengerArr;
    console.log(ironman, cap);
})();
(() => {
    const ironman = {
        name: "Iron man",
        weapon: "Armor suit",
    };
    const capitanAmerica = {
        name: "Capitan America",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, capitanAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const name = "Alonso";
    const getName = () => {
        return name;
    };
    console.log(`Name: ${getName()}`);
})();
//# sourceMappingURL=main.js.map