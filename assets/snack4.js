const invitati = ['marco','paolo','chiara'];
const nome = prompt('inserisci il tuo nome');

for(let i = 0; i < Array.length; i++){
    ammessi = invitati[i];

    if(nome === ammessi){
        console.log('permesso consentito');
    } else{
        console.log('permesso vietato');
    }
}
