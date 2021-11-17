function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce((namesCount, currentName) => {
        namesCount[currentName] = ++namesCount[currentName] || 1;
        return namesCount
    }, {})
  }

  module.exports = countWords