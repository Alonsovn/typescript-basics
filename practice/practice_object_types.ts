(() => {
  type Vehiculo = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  };

  // comment ..
  let batimovil: Vehiculo = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };

  console.log("Log 1");

  let bumblebee: Vehiculo = {
    carroceria: "Amarillo con Negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      console.log("Disparando");
    },
  };

  type Villano = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
  };

  let villanos: Villano[] = [
    {
      nombre: "Lex Luthor",
      edad: 52,
      mutante: false,
    },
    {
      nombre: "Erick Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  type Charles = {
    poder: string;
    estatura: number;
  };

  const charles: Charles = {
    poder: "psiquico",
    estatura: 1.78,
  };

  console.log("Log 2");

  type Apocalipsis = {
    lider: boolean;
    miembros: string[];
  };

  const apocalipsis: Apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Angel"],
  };

  let mystique: Charles | Apocalipsis;

  mystique = charles;
  mystique = apocalipsis;

  console.log("Log 3");
})();
