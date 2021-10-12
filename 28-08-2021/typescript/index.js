var arr = [1, 2, 3, 4, 5];
arr.map(function (x) { return x * x; }).forEach(function (x) { return console.log(x); });
var persona = {
    nombre: 'Diego Alzate',
    edad: 30
};
console.log(persona);
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
console.log(persona);
