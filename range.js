const range = function (start, end, step) {
  let arr = [];
  if(Number.isInteger(start) && Number.isInteger(end) && Number.isInteger(step) 
    && end > start && step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-9,3,3))
