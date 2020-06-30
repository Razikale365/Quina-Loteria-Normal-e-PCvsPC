

//my CODE

//QUINA SIMULADOR
//EN: QUINA LOTTERY PURE CODE SIMULATOR

var arr,arr1, arr2, number;
arr2= [];
arr2.length = 5;
 // how make random bets it took to win

//only two functions not made from scratch they came from stack overflow although i made one but not as versatile.
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

/* random numbers
//var arr2 = [];
for (i=0; i<5;i++){
  var number = randomIntFromInterval(1, 80);
  arr2.push(number);
};*/




  arr2[0] = parseInt(document.getElementById("guess1").value);
  arr2[1] = parseInt(document.getElementById("guess2").value);
  arr2[2] = parseInt(document.getElementById("guess3").value);
  arr2[3] = parseInt(document.getElementById("guess4").value);
  arr2[4] = parseInt(document.getElementById("guess5").value);
  console.log("O jogo feito é: " + arr2);
  
  


// Output each random number

  document.getElementById("test1").innerHTML = arr1[0];
  document.getElementById("test2").innerHTML = arr1[1];
  document.getElementById("test3").innerHTML = arr1[2];
  document.getElementById("test4").innerHTML = arr1[3];
  document.getElementById("test5").innerHTML = arr1[4];
  console.log("O Sorteio deu: " + arr1);



//below was the first attempt to solve it
// if (arr1===arr2){
//   console.log("You Won");
// } else{
//    console.log("You Lost")
// }


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
// while loop to see how many times u have to bet to win aka statistical experiment
// funcion howManyGames(){
//   while (sumofMatches!== 5){
//     quinaSimulator()
//     countofGamestoWin++;
//   } else if (sumofMatches === 5){
//     console.log(countofGamestoWin);
//   }
// };


///dudes CODE


/*jslint devel: true*/
/*eslint-env browser*/

// function playGame() {
//     "use strict";
//
//     // Create the random numbers for the powerball
//     var num1 = Math.floor(Math.random() * 101);
//     var num2 = Math.floor(Math.random() * 101);
//     var num3 = Math.floor(Math.random() * 101);
//     var num4 = Math.floor(Math.random() * 101);
//     var num5 = Math.floor(Math.random() * 101);
//     var num6 = Math.floor(Math.random() * 101);
//     var num7 = Math.floor(Math.random() * 101);
//
//
//
//     // Output each random number
//     document.getElementById("test1").innerHTML = arr[0];
//     document.getElementById("test2").innerHTML = arr[1];
//     document.getElementById("test3").innerHTML = arr[2];
//     document.getElementById("test4").innerHTML = arr[3];
//     document.getElementById("test5").innerHTML = arr[4];
//
//
//     // Set up several conditions to see if any numbers match
//
//
// playGame();
