let fruits = ["Apple", "Banana", "Cherry"];
console.log("Number of fruits: " + fruits.length);
fruits.push("Mango");
let lastFruit = fruits.pop();
console.log("Removed fruit: " + lastFruit);
fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});
console.log("Does array include Banana? " + fruits.includes("Banana"));
