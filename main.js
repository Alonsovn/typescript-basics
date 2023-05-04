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
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Avenger constructor");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("The name must containst more than 3 letters");
            }
            this.name = name;
        }
        getfullNamefromXmen() {
            console.log("Get full name from X men");
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Alonso";
    console.log(wolverine.fullName);
    console.log(wolverine);
    wolverine.getfullNamefromXmen();
})();
//# sourceMappingURL=main.js.map