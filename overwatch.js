var NumberOfWords = 10

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
words[10] = "Genji"
words[10] = "Hanzo"
words[10] = "Junkrat"
words[10] = "McCree"
words[10] = "Mei"
words[10] = "Phara"
words[10] = "Reaper"
words[10] = "Solder:76"
words[10] = "Sombra"
words[10] = "Symmetra"
words[10] = "Torbjörn"
words[10] = "Tracer"
words[10] = "Widowmaker"
words[10] = "Brigitte"
words[10] = "Lúcio"
words[10] = "Mercy"
words[10] = "Moira"
words[10] = "Zenyatta"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomSpec(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
