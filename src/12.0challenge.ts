/* example: type Product = {
  id: string,
  name: string,
  price: number
}
=> type OptionalIdProduct = {
  id?: string,
  name: string,
  price: number
}
*/
// type MakeOptional = ?

type Product = {
  id: string;
  name: string;
  price: number;
};

type OptionalIdProduct = MakeOptional<Product, "id">;
const optionalProduct: OptionalIdProduct = {
  name: "p1",
  price: 10,
};

// get the return type of promise
// const a = () => Promise.resolve('10')
// type ReturnTypeOfA = PromiseReturnType<ReturnType<typeof a>>
// type PromiseReturnType
