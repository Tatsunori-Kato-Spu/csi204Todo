function generateLottery() {
    const numCount = document.getElementById('numCount').value;
    const guessNumber = document.getElementById('guessNumber').value;
    const lotteryNumbers = [];
    let guessResult = '';

    // Generate the lottery numbers
    for (let i = 0; i < numCount; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1;  // Generate a number between 1 and 100
        lotteryNumbers.push(randomNum);
    }

    // Check if the guessed number is in the generated lottery numbers
    if (guessNumber && lotteryNumbers.includes(Number(guessNumber))) {
        guessResult = "Congratulations! You guessed a correct number!";
    } else {
        guessResult = "Sorry, that’s not the correct guess. Try again!";
    }

    // Display the generated lottery numbers
    const lotteryNumbersDiv = document.getElementById('lotteryNumbers');
    lotteryNumbersDiv.innerHTML = lotteryNumbers.join(', '); 

    // Display the guess result
    const guessResultDiv = document.getElementById('guessResult');
    guessResultDiv.innerHTML = guessResult; 
}
