const minNum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;


while (running == true) {

    guess = window.prompt(`Guess a number betwen ${minNum} - ${maxnum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid Number!");

    } else if (guess < minNum || guess > maxnum) {
        window.alert("Please enter a valid Number!")
    }
    else {
        attemps++;
        if (guess < answer) {
            window.alert("Too Low! Try again");
        } else if (guess > answer) {
            window.alert("Too high! Try again");

        } else {
            window.alert(`Correct! The answer was ${answer} . It took You ${attemps} attemps.  `);
            running = false;
        }
    }


}