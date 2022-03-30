const invitati = ['marco','paolo','chiara'];
const nome = prompt('inserisci il tuo nome');

Boolean vero = false;
for(let i = 0; i < Array.length; i++){
    ammessi = invitati[i];

    if(nome === ammessi){
        Boolean vero = true;
        console.log(vero)
    }
}

if(boolean = false){
    alert('Non hai il permesso di entrare')
} else{
    alert('entri pure');
    Boolean vero = false;
}