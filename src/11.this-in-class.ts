class MyClass {
  name = "MyClass";
  description = "desc";
  constructor() {
    setTimeout(this.onMessage, 0);
  }
  getName(this: MyClass) {
    return this.name;
  }

  onMessage() {
    console.log(this.description);
  }

  getDescription = () => {
    return this.description;
  };
}
const c = new MyClass();
// OK
c.getName();
c.getDescription();

// error
const g = c.getName;
console.log(g());
