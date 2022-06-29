const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

const carPassing = function (carArr, newSpeed) {
  carArr.push( {
    time: Date.now(),
    speed: newSpeed
  });
  return carArr;
};

console.log(carPassing(cars, speed));
