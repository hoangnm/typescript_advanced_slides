interface Animal {
  live(): void;
}
interface Robot {
  move(): void;
}
interface Dog extends Animal {
  woof(): void;
}

interface RegExp {
  test(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

type Example3 = RegExp extends Animal
  ? RegExp extends Robo
    ? number
    : string
  : unknown;

// type constraint with extends

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;
