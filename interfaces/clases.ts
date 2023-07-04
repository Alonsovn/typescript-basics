(() => {
  interface XMen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements XMen, Human {
    public name!: string;
    public realName!: string;
    public age!: number;

    mutanPower(id: number): string {
      return this.name + "" + this.realName;
    }
  }

  const mutant = new Mutant();
})();
