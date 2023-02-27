

module.exports = function towelSort (matrix) {
  if (matrix === undefined) { 
    return []
  } else {
    let x = []
 for (var i=0; i < matrix.length; i++){
  i%2?  matrix[i].reverse() : matrix[i];
   x.push(...matrix[i])};
return x}
}