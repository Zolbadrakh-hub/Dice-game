// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;
// Тоглогчдын оноог цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//  Тоглогчийн ээлжийн оноог цуглуулах хувьсагч
var roundScore = 0;
//Шооны аль талаар буусан хувьсагчийг оноог хадгалах хэрэгтэй, 1-6 хүртэл санамсаргүй сонгох хэрэгтэй.



document.getElementById('score-0').textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Шоог шидэх евент листентэр
document.querySelector(".btn-roll").addEventListener('click', function(){
    // 1 - 6 гийн хооронд тоог санамсаргүй тоог гаргах
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шоог гаргаж ирэх
    diceDom.style.display = "block";
    // Санамсаргүй гаргасан тоог зураг болгон өөрчлөх
    diceDom.src = "dice-" + diceNumber + ".png";
    //Буусан тоо нэгээс ялгаатай бол идэвхтэй тоглогчийн оноог өөрчлөнө.
    //Тоглогчийн ээлжийн оноог өөрчлөнө.
    if(diceNumber !== 1){
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else
    {
        roundScore = 0;
        switchToNextPlayer();

    }
})
// Холд товч дарахад оноог дээш нь гаргах
document.querySelector(".btn-hold").addEventListener('click', function(){
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20){
        document.getElementById('name-' + activePlayer).textContent = "Winner";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        activePlayer == 0 ? otherPlayer = 1 : otherPlayer = 0;
        document.querySelector('.player-' + otherPlayer + '-panel').classList.add("loser")
    }
    else{
        roundScore = 0;
        switchToNextPlayer();
    }
})

function switchToNextPlayer(){
        document.getElementById("current-" +activePlayer).textContent = 0;

       activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

       document.querySelector(".player-0-panel").classList.toggle("active");
       document.querySelector(".player-1-panel").classList.toggle("active");
}