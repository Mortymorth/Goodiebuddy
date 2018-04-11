const calc = (initPrice, endPrice, goodiePerc) => {
  if (typeof initPrice != "number" || initPrice <= 0) {
    throw new Error("initPrice cannot be undefined!")
  }

  return initPrice - endPrice / (100 - goodiePerc) * 100
}

module.exports = calc
