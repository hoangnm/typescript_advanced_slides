// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties];
// };

interface Point {
  x: number;
  y: number;
}

interface FrozenPoint {
  readonly x: number;
  readonly y: number;
}

function freezePoint(p: Point): FrozenPoint {
  return Object.freeze(p);
}

const origin = freezePoint({ x: 0, y: 0 });

// Error! Cannot assign to 'x' because it
// is a constant or a read-only property.
origin.x = 42;

/* type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
freeze<T>(o: T): Readonly<T>;
*/
const origin1 = Object.freeze({ x: 0, y: 0 });
origin.x = 42;

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * From T pick a set of properties K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends string, T> = {
  [P in K]: T;
};

/**
 * Make all properties in T nullable
 */
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

/**
 * Turn all properties of T into strings
 */
type Stringify<T> = {
  [P in keyof T]: string;
};
