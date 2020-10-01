module.exports = function towelSort (matrix) {
  return matrix && matrix.length > 0 ? matrix.map((array, index) => index % 2 === 0 ? array : array.reverse()).flat() : [];
}
