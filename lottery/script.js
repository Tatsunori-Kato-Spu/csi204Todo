function generateLottery() {
    const numCount = document.getElementById('numCount').value;
    const lotteryNumbers = [];
    
    while (lotteryNumbers.length < numCount) {
        let randomNum = Math.floor(Math.random() * 49) + 1;
        if (!lotteryNumbers.includes(randomNum)) {
            lotteryNumbers.push(randomNum);
        }
    }

    document.getElementById('lotteryNumbers').textContent = lotteryNumbers.join(', ');
}
