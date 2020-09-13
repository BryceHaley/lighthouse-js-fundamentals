let packingList = ["tent", "bug spray", "sleeping bag"];

console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);

////////////////////////////////////////////////////////////


console.log('\n\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
////////////////////////////////////////////////////

console.log('\n\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
