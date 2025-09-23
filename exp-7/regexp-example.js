let text = "The quick brown fox jumps over the lazy dog.";
let regex = /quick/;
console.log("Contains 'quick'? " + regex.test(text));
let result = regex.exec(text);
console.log(result);
let text2 = "The rain in Spain stays mainly in the plain.";
let regex2 = /ain/g;
let matches = text2.match(regex2);
console.log("Matches for 'ain': ", matches);
