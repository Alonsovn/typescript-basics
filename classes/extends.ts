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

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
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

  //   wolverine.getfullNamefromXmen();
})();
