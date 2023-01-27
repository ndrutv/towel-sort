module.exports = function towelSort (matrix) {
  let newArr = [];

  if (matrix === undefined) {
    return newArr;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        newArr.push(matrix[i]);
      } else {
        matrix[i].reverse();
        newArr.push(matrix[i]);
      }
    }
  
    return newArr.flat();
  }
};