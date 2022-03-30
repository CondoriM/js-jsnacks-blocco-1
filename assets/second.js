//chiede al utente ilprimo numero
const text1 = prompt('inserisci la prima parola')
console.log(text1);

//chiede il secondo numero
const text2 = prompt('inserisci la seconda parola')
console.log(text2);

if (text1.length > text2.length){
   document.getElementById('mag').innerHTML = `1°=${text1},2°=${text2}` 
} else if (text2.length > text1.length){
    document.getElementById('mag').innerHTML = `1°=${text2},2°=${text1}` 
} else if (text2.length = text1.length){
    document.getElementById('mag').innerHTML = `${text1},${text2}` 
}