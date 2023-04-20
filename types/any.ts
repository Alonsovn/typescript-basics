(() => {
  let avenger: any = 124;
  let exist;
  let power;

  avenger = "Dr Stange";

  console.log((avenger as string).charAt(0));

  avenger = 150.235532;

  console.log(avenger.toFixed(2));

  console.log(exist);
  console.log(power);
})();
