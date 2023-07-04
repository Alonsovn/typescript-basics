(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    //Solo se define el metodo, la clase lo implenta
    getFullAddres(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client1: Client = {
    name: "alonso",
    age: 29,
    address: {
      id: 12,
      zip: "ADFG 23",
      city: "Heredia",
    },
    getFullAddres(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Maria",
    age: 18,
    address: {
      id: 32,
      zip: "HEGB 43",
      city: "Cartago",
    },
    getFullAddres(id: string) {
      return this.address.city;
    },
  };
})();
