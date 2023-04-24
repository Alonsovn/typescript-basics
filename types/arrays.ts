(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const villians: string[] = ["Omega Rojo", "Dormamu", "Duende verde"];

  numbers.push(11);

  villians.forEach((v) => console.log(v.toLowerCase()));

  console.log(numbers);
  numbers.forEach((n) => console.log(n));
})();
