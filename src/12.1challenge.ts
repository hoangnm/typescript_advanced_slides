// type MakeOptional<Type, Keys> = Omit<Type, Keys> & Pick<Partial<Type>, Keys>;

// type Product = {
//   id: string;
//   name: string;
//   price: number;
// };

// type OptionalIdProduct = MakeOptional<Product, "id">;
// const optionalProduct: OptionalIdProduct = {
//   name: "p1",
//   price: 10,
// };

// type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T;
// Awaited<>;
