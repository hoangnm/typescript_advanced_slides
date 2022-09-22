// function prop(obj: {}, key: string) {
//   return obj[key];
// }

type TodoKeys = keyof Todo; // "id" | "text" | "due"
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const todo = {
  id: 1,
  text: "Buy milk",
  due: new Date(2016, 11, 31),
};

const id = prop(todo, "id");
const text = prop(todo, "text");
const due = prop(todo, "due");
