console.log("Hello World");
console.log("Ciao Ragazzi! Benvenuti in JavaScript!");

// Il lavoro del software developer si incentra sulla RISOLUZIONE DI PROBLEMI, tramite la produzione di ALGORITMI
// un ALGORITMO è composto da una serie di passaggi ordinati e finiti che portano alla risoluzione di un problema
// Dato uno stesso problema dovrebbe portare allo stesso risultato.

// Cosa ci serve sapere per poter sviluppare un algoritmo? Uno dei concetti fondamentali è quello delle VARIABILI.
// Una variabile la possiamo immaginare come un contenitore (una scatola, una ciotola, un cassetto...) con del conenuto. (contenitore di valore)
// In ambito di hardware o di computer in genere una variabile è un'ALLOCAZIONE DI MEMORIA (RAM) atta a registrare un valore.

// Una variabile ci servirà quando vorremo salvare un dato per poterlo usare anche più volte durante l'esecuzione del nostro programma.
// Non salvarlo lo farebbe morire nell'istante immediatamente successivo alla sua creazione.

("Stefano"); // questa stringa posizionata nel contesto globale, fuori da qualsiasi cosa, senza un console.log non verrà mai vista e
// non produrrà nessun risultato a schermo, nemmeno un errore!

// catturarla all'interno di un console.log, ci permette di vederla prima che lei vada a morire
console.log("Stefano");

// per evitare che il dato muoia dopo il suo utilizzo, l'unico modo è creare una variabile.

// VARIABILE
// In JavaScript le variabili si dichiarano tipicamente con una parolina chiave (keyword) ---> let

let dog; // ho creato un contenitore che sta aspettando di ricevere un valore
console.log(dog);

// OPERATORE DI ASSEGNAZIONE =
dog = "Pluto";
console.log(dog);
// ho riassegnato un'altra volta il valore di dog, lo posso fare infinite volte.
// da questo momento in poi non vedrò MAI PIU' "Pluto"
dog = "Goofy";
console.log(dog);

// Creo una variabile e assegno subito un valore
let cat = "Tom"; // abbiamo creato il contenitore e assegnato subito un valore in forma di stringa
let mouse = "Jerry"; // abbiamo creato il contenitore e assegnato subito un valore in forma di stringa

// le variabili non possono contenere spazi o trattini
// let una variabile = "ciao"
// let una-variabile = "ciao"

// le variabili non possono contenere nel nome un numero come primo carattere
// let 1variabile = "ciao"

// non si possono usare keyword di JS in quanto parole riservate al funzionamento di una particolare struttura di codice
// es. super è una parola riservata!
// let super = "ciao"

// la sintassi corretta per creare variabili dal nome composto da più parole è in camelCase,
// ovvero ogni successiva parola avrà la prima lettera in maiuscolo!

let unaVariabile = "eccola";
console.log(unaVariabile);

// TIPI DI VALORI POSSIBILI IN JS:
// string --> stringhe di valori letterali - es. "Tom", "Jerry", "Duffy", "Una frase molto lunga separata da spazi", "40", "0", "Niente", "undefined", "null"
// number --> 5, 100, 5.25, 0.1, -45, -0.5, NaN, Infinity, -Infinity
// boolean --> true, false
// undefined --> rappresenta l'assenza di valore
// null --> rappresenta l'assenza di valore, decisa dallo sviluppatore

let nullVariable = null;
console.log(nullVariable);

let myFirstNumber = 100.4;
console.log(myFirstNumber);
let mySecondNumber = -4;
let myThirdNumber = 5;

let a = 10;
let b = a;
a = 30;
let c = a + b;

// console.log("risultato dell'operazione matematica sulla variabile c:", c);

let canIDrive = false;

let falseNumber1 = "5";
let falseNumber2 = "10";

// in questo caso l'operazione che avverrà sarà la concatenazione di due stringhe a generarne una singola,
// perché l'operatore + rappresenta la funzionalità di concatenazione nella presenza di una o più stringhe
let falseSum = falseNumber1 + falseNumber2; // "5" + "10"
console.log("risultato di falseSum", falseSum); // "510"

// in questo caso trovandosi due stringhe contenenti numeri, per via della natura dell'operazione non si poteva fare altro che convertire le stringhe a numero
// perché questa volta, a differenza del +, le stringhe non hanno una funzionalità associata all'utilizzo del -, quindi poteva solo essere una sottrazione
let falseSub = falseNumber1 - falseNumber2; // "5" - "10" => 5 - 10 => -5
console.log("risultato di falseSub", falseSub);

let falseSum2 = 10 + unaVariabile;
console.log(falseSum2); // "10eccola" - il numero è stato AUTOMATICAMENTE convertito a stringa per portare a termine l'operazione tra due elementi eterogenei (succede solo con il +)

let falseSub2 = 10 - unaVariabile;
console.log(falseSub2); // NaN - quando un'operazione matematica non è possibile e non è andata a buon fine
// questo sarebbe lo stesso risultato anche se avessimo usato * / % ecc..

// COSTANTI - variabili NON riassegnabili
// const myFirstCons; // non è possibile lasciarle senza valore iniziale

// NON è possibile riassegnare un valore ad una variabile dichiarata come const
const nonChangeableVariable = false;
// nel farlo otteniamo questo errore
// nonChangeableVariable = "falso"; // ERRORE: Assignment to constant variable

// laddove non ci sia una reale necessità di modificare il valore "nel tempo" potrebbe essere più conveniente usare sempre delle const

// esempio di AMBITO o SCOPE delle variabili
let name = "Stefano";
{
  let name = "Alessandro";
  //   se riutilizzo lo stesso nome di una variabile esterna, sovrascriverò quella esterna in questo ambito,
  // ma questa sovrascrittura avverrà solamente internamente a questo ambito
}

// qui fuori continuerò a leggere "Stefano", la riassegnazione interna al precedente ambito non ha sovrascritto la variabile name globale
console.log(name);

// DATA TYPES
// per quanto in JS non ci sia una "tipizzazione forte", ovvero non devo definire a priori il tipo di dato che verrà assegnato ad una variabile
// è comunque buona norma, EVITARE di cambiare il tipo di valore contenuto nelle nostre variabili.

let anotherVar = "Epicode";
anotherVar = 10; // qui il tipo di dato è cambiato completamente! da stringa a numero

console.log("anotherVar", anotherVar);

// Operatori aritmetici avanzati

let num1 = 5;
let num2 = 10;
console.log("num1 prima", num1);

// num1 = num1 + num2;
num1 += num2;
console.log("num1 dopo", num1);

// num1 = num1 * num2;
num1 *= num2;
console.log("num1 dopo moltiplicazione", num1);

// num1 = num1 / num2;
num1 /= num2;
console.log("num1 dopo divisione", num1);

// OPERATORI DI COMPARAZIONE
// num1 ora è 15
// num2 ora è 10

// COMPARAZIONE PER UGUAGLIANZA
console.log(num1 == num2); // false

// COMPARAZIONE PER UGUAGLIANZA STRETTA (⚠️SEMPRE PREFERIBILE)
console.log(num1 === num2); // false

const num3 = 5;
const num4 = "5";

// la comparazione per uguaglianza DEBOLE attua una CONVERSIONE dei valori per uniformarne i tipi prima della valutazione
console.log("5 == '5'", num3 == num4); // true
// questo è un problema! specie quando avviene senza che ce ne rendiamo conto
// di conseguenza è preferibile SEMPRE usare l'opreatore di uguaglianza stretta ed in caso effettuare esplicitamente le conversioni
console.log("5 === '5'", num3 === num4); // false

// DISUGUAGLIANZA
console.log("num1 != num2", num1 != num2); // true
console.log("5 != '5'", num3 != num4); // false

// DISUGUAGLIANZA STRETTA (⚠️SEMPRE PREFERIBILE)
console.log("num1 !== num2", num1 !== num2); // true
console.log("5 !== '5'", num3 !== num4); // true

// COMPARAZIONE >, <, >=, <=
console.log("num1 < num2", num1 < num2); // false perché num1 è 15 ed è maggiore di num2 che è 10
console.log("num3 >= num4", num3 >= num4); // true perché l'uguaglianza dei due valori è ammessa

// NOT !
// il not mi trasforma un valore booleano nel suo opposto
console.log("NOT", !(5 === 10));

let eyeColor = "green";
let height = 165;
let hairLength = 30;

console.log("CASISTICA AND con tutto true", eyeColor === "green" && height > 160 && hairLength >= 30); // true && true && true ==> true

hairLength = 29;

console.log("CASISTICA AND con un false", eyeColor === "green" && height > 160 && hairLength >= 30); // true && true && false ==> false

console.log("CASISTICA OR, cerco uno tra valori definiti che è presente", eyeColor === "green" || eyeColor === "brown" || eyeColor === "gray"); // true || false || false ==> true

eyeColor = "blue";
console.log("CASISTICA OR, cerco uno tra valori definiti non presente", eyeColor === "green" || eyeColor === "brown" || eyeColor === "gray"); // false || false || false ==> false

console.log(
  "CASISTICA NOR, il valore della variaible non deve corrispondere a nessuno dei citati",
  !(eyeColor === "green" || eyeColor === "brown" || eyeColor === "gray")
); // !(false || false || false) ==> !(false) ==> true

console.log(
  "CASISTICA MISTA, il valore della variaible non deve corrispondere a nessuno dei citati",
  !(eyeColor === "green" || eyeColor === "brown" || eyeColor === "gray") && height > 160 && hairLength < 10
);
// !(false || false || false) && (true && false)

// true && false ==> false

const personAge = prompt("quanti anni hai?");

// OPERATORE TERNARIO
// condizione ? valore per condizione VERIFICATA : valore per condizione NON VERIFICATA

const accessMessage = personAge >= 18 ? "You can Enter" : "You are too young!";

alert(accessMessage);
