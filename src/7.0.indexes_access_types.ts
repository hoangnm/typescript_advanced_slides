type Person = { age: number; name: string; alive: boolean };

const person: Person = {
  age: 10,
  name: "p1",
  alive: true,
};
person.age;

type Age = Person["age"];

type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person1 = typeof MyArray[number];
type Age1 = typeof MyArray[number]["age"];
