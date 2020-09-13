const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegeArr, category) {
  let winner = '';
  let bestScore = 0;
  for (let elem of vegeArr) {
    console.log(elem);
    if (elem[category] >= bestScore) {
      winner = elem.submitter;
      bestScore = elem[category];
    }
  }
  return winner;
};

console.log(judgeVegetable(vegetables, 'redness'));
