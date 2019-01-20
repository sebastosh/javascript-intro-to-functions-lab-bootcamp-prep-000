function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {

<<<<<<< HEAD
if (string === "hello") {
  return 'I can\'t hear you!'
 
} else if (string === "HELLO") {
  return 'YES INDEED!'
 
} else if (string === "I love you, Grandma."){ 
  return 'I love you, too.'
=======
string = "I love you, Grandma."
 
if (string === "hello") {
  console.log("I can't hear you!")
 
} else if (string === "HELLO") {
  console.log("YES INDEED!")
 
} else { 
  console.log("I love you, too.")
>>>>>>> c2bc33d948f72540b9e0e6a25d6f610bd3dda555
}

}