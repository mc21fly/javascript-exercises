const ftoc = function(temp) {
  return Math.round(((5/9) * (temp-32)) * 10) / 10
}

const ctof = function(temp) {
  return Math.round((((9/5) * temp + 32)) * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
