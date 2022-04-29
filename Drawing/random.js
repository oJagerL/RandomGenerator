var NumberOfWords = 6

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "A"
words[2] = "B"
words[3] = "C"
words[4] = "D"
words[5] = "E"
words[6] = "F"

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function PickRandomSpec(frm) {
// Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)
    var number = randomIntFromInterval(1, 10)

// Display the word inside the text box
    frm.WordBox.value = words[rnd]
    frm.NumberBox.value = number
}
