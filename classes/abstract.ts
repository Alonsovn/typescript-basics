(() => {
  // Se usan para crear otras clases, que otras clases implementen lo que se espera
  //No se crean instancias de las clases abstractas
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    public salvaMundo() {
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

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  printName(wolverine);
  printName(magneto);
})();
