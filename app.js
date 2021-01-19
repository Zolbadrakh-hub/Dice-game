// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;
// Тоглогчдын оноог цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//  Тоглогчийн ээлжийн оноог цуглуулах хувьсагч
var roundscore = 0;
//Шооны аль талаар буусан хувьсагчийг оноог хадгалах хэрэгтэй, 1-6 хүртэл санамсаргүй сонгох хэрэгтэй.

var dice = Math.floor(Math.random() * 6) + 1;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";