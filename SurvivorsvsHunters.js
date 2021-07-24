var NumberOfWords = 2

var words = new BuildArray(NumberOfWords)

words[1] = "Hunter"
words[2] = "Survivor"

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function PickRandomSpec(frm) {
// Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
    frm.WordBox.value = words[rnd]
}
