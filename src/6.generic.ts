const firstItem = (data: number[]): number => {
  return data[0];
};

const _firstItem = <T>(data: T[]): T => {
  return data[0];
};

_firstItem(["2", "3"]);

interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}

const boxA: Box<string> = { contents: "hello" };
boxA.contents;

const boxB: StringBox = { contents: "world" };
boxB.contents;

// type constraints
class Personalization {
  static greet<T extends { name: string }>(obj: T) {
    return "Hello " + obj.name;
  }
}

// class

interface User {
  id: number;
  name: string;
}

class Entity<T> {
  items: T;
}

const product = new Entity<User>();
product.items;
