function generateLottery() {
    const numCount = document.getElementById('numCount').value;
    const lotteryNumbers = [];
    
    // Generate unique random numbers between 1 and 49
    while (lotteryNumbers.length < numCount) {
        let randomNum = Math.floor(Math.random() * 49) + 1;
        if (!lotteryNumbers.includes(randomNum)) {
            lotteryNumbers.push(randomNum);
        }
    }

    // Display the generated numbers
    document.getElementById('lotteryNumbers').textContent = lotteryNumbers.join(', ');
}
