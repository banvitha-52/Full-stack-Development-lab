function isArmstrong(num) {
    let strNum = num.toString();
    let sum = 0;
    for (let char of strNum) {
      let digit = parseInt(char);
      sum += Math.pow(digit, 3);
    }
    return sum === num;
  }
  
  let number = parseInt(prompt("Enter a number:"));
  if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number.");
  } else {
    console.log(number + " is NOT an Armstrong number.");
  }
  