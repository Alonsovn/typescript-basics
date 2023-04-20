(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  const error2 = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }

    return 10;
  };

  error("Auxilio!");
  console.log("Hi!");
})();
