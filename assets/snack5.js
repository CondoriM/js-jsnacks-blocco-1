const disp = [];

for(let i = 0; i < 6; i++){
    let valore = Number(prompt('inserisci un numero'));

    if(valore % 2 == 0){
        console.log(`${valore} Pari`);
    } else{
        disp.push(valore)
    }
} 

console.log(disp);