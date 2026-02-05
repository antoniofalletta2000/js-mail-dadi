/*Ciao classe,
Esercizio di oggi:
nome repo: js-mail-dadi

Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//variabile per l'utente in cui deve scrivere la propria email
const your_email= (prompt("type your email"))
//creo un array con tot email 
const mails = ["Antonio@gmail.com","Larisa@gmail.com", "Pietro@gmail.com", "Paolo@gmail.com"]
console.log(mails);
//creo una variabile let con un valore booleano che cambierà in base alla veridicità dell'email scritta dall'utente
let verifica = false
//apro un ciclo for il cui punto di partenza è la posizione 0 e, incremenando, il punto arrivo è la posizione dell'ultimo elemento
for (let i=0; i<=mails.length;i++){
    //SE uno degli elementi dell'array è uguale all'email scritta dall'utente
    if (mails[i]===your_email){
        //ALLORA la variabile di verifica ci darà true
        verifica=true
        console.log(verifica);
        
    }
    //ALTRIMENTI 
    else {
        //la variabile di verifica ci darà false
        verifica=false
        console.log(verifica);
        
    }
}