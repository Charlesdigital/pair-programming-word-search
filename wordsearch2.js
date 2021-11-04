const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = [];
  let existHorizontal = false;
  let existVertical = false;

  //   console.log("test", horizontalJoin);

  for (let i = 0; i < letters.length; i++) {
    let words = "";
    for (let j = 0; j < letters.length; j++) {
      words += letters[j][i];
    }
    // console.log("test 2", words);
    verticalJoin.push(words);
  }

  for (l of horizontalJoin) {
    if (l.includes(word)) existHorizontal = true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) existVertical = true;
  }
  if (existHorizontal && existVertical) {
    return true;
  }
  return false;
};
//j is the column i row element in column array
console.log(
  wordSearch(
    [
      ["A", "W", "C", "F", "Q", "U", "A", "L"],
      ["S", "E", "I", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "M", "J", "T", "E", "V", "R", "G"],
      ["W", "H", "C", "S", "Y", "E", "R", "L"],
      ["B", "F", "R", "E", "N", "E", "Y", "B"],
      ["U", "B", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "SEINFELD"
  )
);
module.exports = wordSearch;
