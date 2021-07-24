var NumberOfWords = 4

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Pyro"
words[2] = "Avenger"
words[3] = "Berserker"
words[4] = "Thunderlord"

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
