const calculerTotal = require('./panier');

test('retourne 50 si le prix est 50 (pas de réduction)', () => {
  expect(calculerTotal(50)).toBe(50);
});

test('applique une réduction de 20% si le prix est supérieur à 100', () => {
  expect(calculerTotal(200)).toBe(160);
});