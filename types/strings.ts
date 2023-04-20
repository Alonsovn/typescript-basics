(() => {
  const batman = "Batman";
  const linternaVerde = "Linterna Verde";
  const volcanoNegro = `Héroe Volcan Negro`;

  console.log(`I'm ${batman}`);

  console.log(batman.toLocaleUpperCase());

  console.log(batman[10]?.toLocaleUpperCase() || "No present");
})();
