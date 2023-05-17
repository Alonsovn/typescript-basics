"use strict";
(() => {
  class Mutante {
    constructor(name, realName) {
      this.name = name;
      this.realName = realName;
    }
  }
  class Xmen extends Mutante {
    salvaMundo() {
      return "Mundo salvado!";
    }
  }
  class Villiam extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado!";
    }
  }
  const wolverine = new Xmen("Wolverine", "Logan");
  console.log(wolverine.salvaMundo());
  const magneto = new Villiam("Magneto", "Magnus");
  console.log(magneto.conquistarMundo());
  const printName = (character) => {
    console.log(character.name);
  };
  printName(wolverine);
  printName(magneto);
})();
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
})();
(() => {
  class Apocalipsis {
    constructor(name) {
      this.name = name;
    }
    static callApocalipsis() {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Unique Apocalipsis instance");
      }
      return Apocalipsis.instance;
    }
  }
  const apocalipsis1 = Apocalipsis.callApocalipsis();

  console.log(apocalipsis1);
})();
//# sourceMappingURL=main.js.map
