(() => {
  // lastName parameter is optional
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "No lastname"}`;
  };

  const name = fullName("Tony", "Stark");
  const name2 = fullName("Tony");

  console.log(name);
  console.log(name2);
})();
