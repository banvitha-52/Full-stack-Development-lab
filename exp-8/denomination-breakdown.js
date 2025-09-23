let amount = parseInt(prompt("Enter the amount deposited:"));
let denominations = [100, 50, 20, 10, 5, 2, 1];
let result = [];

for (let denom of denominations) {
  let count = Math.floor(amount / denom);
  if (count > 0) {
    result.push(count + "-" + denom + "'s");
    amount = amount % denom;
  }
}

console.log(result.join(", "));
