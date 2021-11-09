/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//creo un arrey di 5 numeri casuali tutti diversi
//dopo  faccio partire un timer di 30 secondi dal''uscita dei 5 numeri
    //faccio un ciclo con un promp che mi chiede di inserire per 5 volte dei numeri
//creo un arrey dove puschare i numeri 
    //se il numero e uguale a quello dei 5 numeri lo puschio altrimenti vado avanti
    //stampo con un messaggio i numeri che l'utente ha indovinato
    //se li ha indovinati tutti stampo un messaggio di complimenti
let numeri = [];
let numeriIndovinati = [];
const container = document.getElementById("container")

    
while(numeri.length < 5){
    let numeriCasuali = Math.floor(Math.random() * 100) + 1;
    if(numeri.includes !== numeriCasuali) 
    numeri.forEach((element) => {
        container.innerHTML =`
        <span>RICORDA I NUMERI:</span>
        <div id="numeri">
            <Span id="numerirand">
                ${numeri}
            </Span>
        </div>

        `
    });
    numeri.push(numeriCasuali);
};console.log(numeri);

setTimeout(() => {
    for (let i = 0; i<5; i++){
        let numeriIseriti = parseInt(prompt("inserisci uno alla volta i numeri che ti ricordi"));
        container.innerHTML=`
        <span> i numeri indovinati sono:</span>
        <div id="numeri">
            <Span id="numerirand">
                ${numeriIndovinati}
            </Span>
        </div>
        `
        if(numeriIseriti === numeri[i]){
            numeriIndovinati.push(numeriIseriti)   
            console.log("hai indovinato questi numeri :",numeriIndovinati);
        }else if(numeriIseriti !== numeri);
        console.log("questi sono i numeri inseriti: ",numeriIseriti);
    }
}, 3000); 


