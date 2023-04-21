(() => {
  const addNumber = (a: number, b: number) => a + b;
  const greet = (name: string): string => `Hi ${name}!`;
  const saveTheWorld = () => `The world is saved!`;

  let myFunction1: (nummber1: number, number2: number) => number;
  let myFunction2: (username: string) => string;
  let myFunction3: () => string;
  //   let myFunction: Function;
  //   let myFunction; // Type any

  //   myFunction = 10;
  //   console.log(myFunction);

  myFunction1 = addNumber;
  console.log(myFunction1(7, 10));

  myFunction2 = greet;
  console.log(myFunction2("Alonso"));

  myFunction3 = saveTheWorld;
  console.log(myFunction3());
})();
