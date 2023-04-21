(() => {
  // optional args must be at the end
  const fullName = (
    firstName: string,
    lastName?: string,
    isUpper: boolean = false
  ): string => {
    if (isUpper) {
      return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "no lastname"}`;
    }
  };

  const name: string = fullName("Tony", "Stark");

  console.log(name);
})();
