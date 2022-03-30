const result = [];

for(i = 0; i < 10; i++){
    let numero = i + 1;
    let user_num = `${numero}° numero`;

    valore = Number(prompt(`inserisci il ` + user_num))
    console.log(`valore inserito ${valore}`);

    result.push(valore)
}

function somma(array){
    let sum = 0;

    for(let i = 0; i < Array.length; i++){
        sum += array[i];
    }
    return sum;
}
let calcolo = sum;

console.log(calcolo);
console.log(result);