(() => {
  const hero = "Flash";

  function returnName() {
    return hero;
  }

  const activateBatiSignal = () => {
    return "Batisignal active!";
  };

  console.log(typeof activateBatiSignal);

  console.log(returnName());
})();
