const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

var uniques = new Map();
let words = sonnet.match(/\w+/g);


words.forEach(function(word) {
  if (uniques.has(word)) {
    let val = uniques.get(word);
    val += 1;
    uniques.set(word, val);
  } else {
    uniques.set(word, 1);
  }
} )

/*
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques.has(word)) {
    let val = uniques.get(word);
    val += 1;
    uniques.set(word, val);
  } else {
    uniques.set(word, 1);
  }
}
*/

console.log("Running print loop")
for (var [key, value] of uniques.entries()) {
  console.log(key, value)
}
console.log("End Loop")
