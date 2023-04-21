(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatiSignal = (): string => {
    return "Batisignal active!";
  };

  console.log(typeof activateBatiSignal);

  console.log(returnName());
})();
