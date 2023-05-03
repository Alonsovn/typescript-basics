(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
  }

  const antman = new Avenger("Antman", "Captain", "Scoot Lang");
  console.log(antman);
})();
