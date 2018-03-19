let pinkBox = document.getElementById("pink-box");
let yellowBox = document.getElementById("yellow-box");
let greenBox = document.getElementById("green-box");
let blueBox = document.getElementById("blue-box");
let outcome = document.getElementById("outcome");

let affirmations = ["Smile", "Laugh", "Dance", "Sing", "Meditate"]

outcome.textContent = "Your affirmation will appear here!"

pinkBox.addEventListener("click", showPink);

function showPink () {
 outcome.textContent = affirmations [0]   
}

yellowBox.addEventListener("click", showYellow);

function showYellow () {
 outcome.textContent = affirmations [1]   
}

greenBox.addEventListener("click", showGreen);

function showGreen () {
 outcome.textContent = affirmations [2]   
}

blueBox.addEventListener("click", showBlue);

function showBlue () {
 outcome.textContent = affirmations [3]   
}
