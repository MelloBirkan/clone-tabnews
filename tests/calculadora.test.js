const calculadora = require("../models/calculadora") // importar

test("Somar 2 + 2 deveria dar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4)
});

test("Somar 5 + 100 deveria dar 100", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105)
});

test("Banana + 100", () => {
  const resultado = calculadora.somar("Banana", 100);
  expect(resultado).toBe("Erro")
})

test("Dividir 2 / 2 deveria dar 1", () => {
  const resultado = calculadora.dividir(2, 2);
  expect(resultado).toBe(1)
});