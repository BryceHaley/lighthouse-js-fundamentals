const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log('\tfor loop:');
let idx = 0;
while (idx < ingredients.length) {
  console.log(ingredients[idx]);
  idx++;
}


// Write a for loop that prints out the contents of ingredients:
console.log('\n\twhile loop: ');
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards

console.log('\n\treverse loop:');
for (let i =  ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
