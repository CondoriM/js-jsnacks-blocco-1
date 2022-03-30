//chiede al utente ilprimo numero
num1 = prompt('inserisci il primo numero')
console.log(num1);

//chiede il secondo numero
num2 = prompt('inserisci il secondo nunero')
console.log(num2);

if (num1 > num2){
   document.getElementById('mag').innerHTML = `ha vinto il player 1 con= ${num1}` 
} else if (num2 > num1){
    document.getElementById('mag').innerHTML = `ha vinto il player 2 con= ${num2}`
} else {
    document.getElementById('mag').innerHTML = `pareggio,avete giocato tutti e due = ${num1}`
}