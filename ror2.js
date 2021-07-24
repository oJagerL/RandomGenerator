var NumberOfWords = 12

var words = new BuildArray(NumberOfWords);

// Use the following variables to
// define your random words:
words[1] = "Commando"
words[2] = "Huntress"
words[3] = "MUL-T"
words[4] = "Engineer"
words[5] = "Artificer"
words[6] = "Mercenary"
words[7] = "REX"
words[8] = "Loader"
words[9] = "Acrid"
words[10] = "Captain"
words[11] = "Sniper"
words[12] = "Clay Templar"

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
