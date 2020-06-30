//QUINA SIMULADOR SURPRESINHA CODIGO PURO
//EN: QUINA LOTTERY PURE CODE SIMULATOR

var arr1, arr2, number;


//only function not made from scratch it came from stack overflow although i made one but not as versatile.
function randomIntFromInterval(min, max) { // min and max included // sets the range of numbers to simulate
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function intersect(a, b) {
  return a.filter(Set.prototype.has, new Set(b));
}
const uniqueChars = arr =>  [...new Set([...arr])].join();

function quinaSimulator(){
 var arr1 = [];
  

for (let i=0; i<5;i++){
  var number = randomIntFromInterval(1, 80);
 uniqueChars(arr1);
  arr1.push(number);
     
};
  
var arr2 = [];
for (i=0; i<5;i++){
  var number = randomIntFromInterval(1, 80);
   arr2.push(number);
    uniqueChars(arr2);
};
 console
console.log("O jogo feito é: " + arr1);
console.log("O Sorteio deu: " + arr2);

console.log(intersect(arr1, arr2));
console.log(uniqueChars(intersect(arr1, arr2)).length);

  if(uniqueChars(intersect(arr1, arr2)).length==0){
    console.log("Não acertou nenhum");
    
  }
  else if(uniqueChars(intersect(arr1, arr2)).length === 1){
   console.log("Acertou um");
   

 } else if(uniqueChars(intersect(arr1, arr2)).length === 2 ){
    console.log("Fez um Duque, ou seja ganho o suficiente para apostar denovo");
 } else if(uniqueChars(intersect(arr1, arr2)).length === 3 ){
    console.log("Fez um Terno, ou seja ganho o suficiente para apostar denovo");
  } else if(uniqueChars(intersect(arr1, arr2)).length === 4 ){
     console.log("Fez uma Quadra, ou seja na traaaveee haha");
   } else if(uniqueChars(intersect(arr1, arr2)).length === 5 ){
      console.log("UHUULL GANHOO TA MILIONÁRIOOO SQN KKKK!!!");
   } 

};
