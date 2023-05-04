"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ( ${this.team} )`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Captain", "Scoot Lang");
    console.log(antman);
    console.log(antman.bio());
})();
//# sourceMappingURL=main.js.map