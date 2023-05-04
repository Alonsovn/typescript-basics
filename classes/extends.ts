(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Avenger constructor");
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen");
    }

    getfullNamefromXmen() {
      console.log("Get full name from X men");

      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  console.log(wolverine);
  wolverine.getfullNamefromXmen();
})();
