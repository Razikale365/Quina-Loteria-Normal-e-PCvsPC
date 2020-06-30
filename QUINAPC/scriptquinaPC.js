
var arr,arr1, arr2, number;
arr2= [];
arr2.length = 5;
countofGamestoWin = 0; // how make random bets it took to win

//only function not made from scratch it came from stack overflow although i made one but not as versatile.
function randomIntFromInterval(min, max) { // min and max included // sets the range of numbers to simulate
  return Math.floor(Math.random() * (max - min + 1) + min);
 };
function intersect(a, b) {
  return a.filter(Set.prototype.has, new Set(b));
}

function quinaSimulator(){




 var arr1 = [];
for (let i=0; i<5;i++){
  var number = randomIntFromInterval(1, 80);
  arr1.push(number);
};

// random numbers
var arr2 = [];
for (i=0; i<5;i++){
  var number = randomIntFromInterval(1, 80);
  arr2.push(number);
};



if (arr2[1]!== undefined){
  document.getElementById("guess1").innerHTML = arr2[0];
  document.getElementById("guess2").innerHTML = arr2[1];
  document.getElementById("guess3").innerHTML = arr2[2];
  document.getElementById("guess4").innerHTML = arr2[3];
  document.getElementById("guess5").innerHTML = arr2[4];
};

// Output each random number
if (arr1[1]!== undefined){
  document.getElementById("test1").innerHTML = arr1[0];
  document.getElementById("test2").innerHTML = arr1[1];
  document.getElementById("test3").innerHTML = arr1[2];
  document.getElementById("test4").innerHTML = arr1[3];
  document.getElementById("test5").innerHTML = arr1[4];
};



console.log("O jogo feito é: " + arr1);
console.log("O Sorteio deu: " + arr2);




console.log(intersect(arr1, arr2));
console.log(intersect(arr1, arr2).length);
  if(intersect(arr1, arr2).length==0){
    console.log("Acertou um");
    document.getElementById("winner").innerHTML = "Não acertou nenhum";
  }
  else if(intersect(arr1, arr2).length === 1){
   console.log("Acertou um");
   document.getElementById("winner").innerHTML = "Acertou 1";

 } else if(intersect(arr1, arr2).length === 2 ){
    console.log("Fez um Duque, ou seja ganho o suficiente para apostar denovo");
    document.getElementById("winner").innerHTML = "Fez um Duque, ou seja ganho o suficiente para apostar denovo";

 } else if(intersect(arr1, arr2).length === 3 ){
    console.log("Fez um Terno, ou seja ganho o suficiente para apostar denovo");
    document.getElementById("winner").innerHTML = "Fez um Terno, ou seja ganho o suficiente para apostar denovo";
    sumofMatches = 0;
  } else if(intersect(arr1, arr2).length === 4 ){
     console.log("Fez uma Quadra, ou seja na traaaveee haha");
     document.getElementById("winner").innerHTML = "Fez uma Quadra, ou seja na traaaveee haha!!";
     sumofMatches = 0;
   } else if(intersect(arr1, arr2).length === 5 ){
      console.log("UHUULL GANHOO TA MILIONÁRIOOO SQN KKKK!!!");
      document.getElementById("winner").innerHTML = "UHUULL GANHOO TA MILIONÁRIOOO!!!";

    }

};

quinaSimulator();
