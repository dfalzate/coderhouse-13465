const suma = require('./sum.js')

test('Funcion suma', () => {
  expect(suma(3,5)).toBe(8)
})