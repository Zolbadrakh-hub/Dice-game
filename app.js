// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;
// Тоглогчдын оноог цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//  Тоглогчийн ээлжийн оноог цуглуулах хувьсагч
var roundscore = 0;
//Шооны аль талаар буусан хувьсагчийг оноог хадгалах хэрэгтэй, 1-6 хүртэл санамсаргүй сонгох хэрэгтэй.



document.getElementById('score-0').textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
})
