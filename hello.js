const sayHello = (name) => {
  console.log("Hello, " + name);
};

sayHello("Marcel");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const returnSayHello = (name) => {
  return "Hello, " + name;
};

const greeting = returnSayHello("Marcel");
console.log(greeting);

console.log(returnSayHello("Marcel"));
