
let score = 0;

let answer1 = prompt("How many hours in a day");
if (answer1 === "24") {
    score++;
}


let answer2 = prompt("How many players in Football");
if (answer2 === "11") {
    score++;
}


let answer3 = prompt("What is the largest continent in the world?");
if (answer3.toLowerCase() === "asia") {
    score++;
}

let answer4 = prompt("Who discovered the law of gravity?");
if (answer4.toLowerCase() === "isaac newton" || answer4.toLowerCase() === "newton") {
    score++;
}

let answer5 = prompt("What animal is known as the king of the jungle?");
if (answer5.toLowerCase() === "lion") {
    score++;
}

alert("You scored " + score + " out of 5!");