function calculerTotal(prix) {
  if (prix > 100) {
    return prix * 0.8;  // Appliquer 20% de réduction (multiplier par 0.8)
  }
  return prix;
}

module.exports = calculerTotal;