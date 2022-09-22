interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example1 = number;

type Example2 = RegExp extends Animal ? number : string;

// extends

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;

// type infer
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;

type Num = number;

type Str = GetReturnType<(x: string) => string>;

type Str = string;

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// Distributive Conditional Types

type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;
