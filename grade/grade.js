function calculateGPA() {
    let scores = [
        parseFloat(document.getElementById("score1").value) || 0,
        parseFloat(document.getElementById("score2").value) || 0,
        parseFloat(document.getElementById("score3").value) || 0,
        parseFloat(document.getElementById("score4").value) || 0,
        parseFloat(document.getElementById("score5").value) || 0
    ];
    
    let credits = [3, 3, 3, 3, 3];
    let totalCredits = credits.reduce((a, b) => a + b, 0);
    let totalPoints = scores.reduce((sum, score, index) => sum + (score / 100) * 4 * credits[index], 0);
    // คำนวณ GPA คะแนน/คะแนนเต็ม * หน่วยกิต
    // หาผลรวมของคะแนนทั้งหมด หาร หน่วยกิตทั้งหมด
    let gpa = totalPoints / totalCredits;
    document.getElementById("result").innerText = "Your GPA: " + gpa.toFixed(2);
}