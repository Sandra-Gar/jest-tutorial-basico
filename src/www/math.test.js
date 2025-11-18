const sum = require('./math');

test('debe sumar 1 + 2 y ser igual a 3', () => {
  const result = sum(1,2);

  expect(result).toBe(3);
});

test('debe sumar -10 + 5 y ser igual a -5', () => {
  expect(sum(-10,5)).toBe(-5);
});

test('debe retornar un objeto con el resultado y el estado', () => {
    const data = {
        result: sum(10,5),
        success: true
    };
  expect(data).toEqual({
    result: 15,
    success:true
  });
});

test('la suma de 20 + 15 debe ser mayor que 30', () => {
  const result = sum(20,15);

  expect(result).toBeGreaterThan(30);
});

test('la suma de -10 + 5 debe ser menor que 0', () => {
  const result = sum(-10,5);

  expect(result).toBeLessThan(0);
});

test('la suma no debe ser igual a un valor incorrecto', () => {
  const result = sum(4, 4);
  expect(result).not.toBe(10); 
});

test('el objeto debe contener la propiedad result', () => {
  const data = {
    result: sum(5, 5),
    success: true
  };
  expect(data).toHaveProperty('result');
});

test('el resultado debe ser mayor que 15', () => {
  const result = sum(10, 7);
  expect(result).toBeGreaterThan(15);
});

test('el resultado debe ser cercano a 0.3 por decimales', () => {
  const result = sum(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

