 

 function mediaVetor(array){
 let soma = 0;
 for(let i=0;i < array.length;i++){
 soma += array[i];
 }
 let media = soma/array.length;
 return media 
 } 
 let array = [5,6,7];
console.log(mediaVetor(array))
