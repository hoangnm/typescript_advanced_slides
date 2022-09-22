function log(title: string) {
  return (target: any, key: string, descriptor: any) => {
    const original = descriptor.value;
    console.log(target, key);
    descriptor.value = function (...args: any[]) {
      // Call the original method
      const result = original.apply(this, args);
      // Log the call, and the result
      console.log(
        `${title}.${key} with args ${JSON.stringify(
          args
        )} returned ${JSON.stringify(result)}`
      );
      // Return the result
      return result;
    };
    return descriptor;
  };
}

class Calculator {
  @log("Calculator")
  square(num: number) {
    return num * num;
  }
}

const calculator = new Calculator();
calculator.square(2);
