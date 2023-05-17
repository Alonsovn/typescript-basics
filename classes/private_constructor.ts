(() => {
  // Use this to create singleton instances

  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Unique Apocalipsis instance");
      }

      return Apocalipsis.instance;
    }
  }

  const ap1 = Apocalipsis.callApocalipsis();
})();
