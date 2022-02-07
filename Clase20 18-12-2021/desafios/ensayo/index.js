class ensayo {
  static suma(a, b) {
    return a + b;
  }
}

ensayo.resta = function () {};

console.log(ensayo.suma(1, 2));
const fun = new ensayo();
console.log(fun);
console.log(fun.__proto__.constructor.suma(1, 2));
