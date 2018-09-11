var NumberOfWords = 10

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Pyro"
words[2] = "Cryo"
words[3] = "Aqua"
words[4] = "Avenger"
words[5] = "Crusader"
words[6] = "Protector"
words[7] = "Berserker"
words[8] = "Defender"
words[9] = "Thunderlord"
words[10] = "Earthwarden"

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
