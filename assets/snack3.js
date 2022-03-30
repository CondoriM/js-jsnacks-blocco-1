let somma = 0;

for(i = 0; i < 10; i++){
    let numero = i + 1;
    let user_num = `${numero}° numero`;

    valore = Number(prompt(`inserisci il ` + user_num))
    console.log(`valore inserito ${valore}`);

    somma = somma + valore; 
}

console.log(somma);