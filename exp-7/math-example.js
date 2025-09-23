console.log("PI: " + Math.PI);
console.log("Round 4.7: " + Math.round(4.7));
console.log("Floor 4.7: " + Math.floor(4.7));
console.log("Ceil 4.2: " + Math.ceil(4.2));
console.log("Random number: " + Math.random());
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random integer between 1 and 10: " + getRandomInt(1, 10));
console.log("2^3: " + Math.pow(2, 3));
console.log("Square root of 16: " + Math.sqrt(16));
