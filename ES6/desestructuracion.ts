(() => {
  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avenger = {
    nick: "Samuel L Jackson",
    ironman: "Rober D Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.12434233,
  };

  const { poder, vision } = avengers;
  console.log(poder.toFixed(3), vision.toUpperCase());

  //Recibe los parametros deconstruidos
  const printAvenger = ({ ironman, ...restArgs }: Avenger) => {
    console.log(ironman);

    console.log(restArgs);
  };

  printAvenger(avengers);

  // Array
  const avengerArr: string[] = ["Captin America", "Ironman", "Hulk"];
  const avengerTuple: [string, boolean, number] = [
    "Captin America",
    true,
    13.42,
  ];

  const [cap, ironman] = avengerArr;

  console.log(ironman, cap);
})();
