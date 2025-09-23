const obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

Object.keys(obj).forEach(function(key) {
  console.log(key + ": " + obj[key]);
});

for (let [key, value] of Object.entries(obj)) {
  console.log(key + ": " + value);
}
