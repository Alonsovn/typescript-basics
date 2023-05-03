(() => {
  class Avenger {
    private name: string;
    private team: string;
    public realName?: string; //Optional
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman = new Avenger("Antman", "Captain");
  console.log(antman);
})();
