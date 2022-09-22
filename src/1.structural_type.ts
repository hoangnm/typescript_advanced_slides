interface ProductA {
  name: string;
}

interface ProductB {
  name: string;
  description: string;
}

function getProductName(product: ProductA) {
  return product.name;
}

const pA: ProductA = { name: "a" };
getProductName(pA);

const pB: ProductB = { name: "b", description: "desc" };
getProductName(pB);

const pC = { name: "c", other: "test" };
getProductName(pC);
