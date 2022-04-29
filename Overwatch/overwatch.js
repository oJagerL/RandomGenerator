var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Ana"
words[2] = "D.va"
words[3] = "Orisa"
words[4] = "Reinhardt"
words[5] = "Roadhog"
words[6] = "Winston"
words[7] = "Wrecking Ball"
words[8] = "Zarya"
words[9] = "Bastion"
words[10] = "Doomfist"
words[11] = "Genji"
words[12] = "Hanzo"
words[13] = "Junkrat"
words[14] = "McCree"
words[15] = "Mei"
words[16] = "Phara"
words[17] = "Reaper"
words[18] = "Solder:76"
words[19] = "Sombra"
words[20] = "Symmetra"
words[21] = "Torbjörn"
words[22] = "Tracer"
words[23] = "Widowmaker"
words[24] = "Brigitte"
words[25] = "Lúcio"
words[26] = "Mercy"
words[27] = "Moira"
words[28] = "Zenyatta"

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
