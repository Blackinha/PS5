function multVetor ( escalar, vetor ) {

    let a = [];
    for (let i=0; i < vetor.length; i++) {
        let aux = escalar * vetor[i];
        a.push(aux);
    }
    return a;
}

let vetor = [7, 17, 12, 124, 11, 3, 234123];
let escalar = 4;

console.log(multVetor(escalar, vetor))