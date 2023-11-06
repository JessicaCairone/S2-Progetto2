/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort(); 

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let primo = pets.shift();
pets.push(primo);


console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++)
{ 
  cars[i].licensePlat = "CA793HJ"; 

}

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let nuovoOggetto = Object.assign({}, cars[0]);

nuovoOggetto.brand = 'Ford';
nuovoOggetto.model = 'Ka+';
nuovoOggetto.color = 'grey';
nuovoOggetto.trims = ['allure', 'GT'];
nuovoOggetto.licensePlat = 'CA793HJ';

cars.push(nuovoOggetto); 
console.log(cars);

for (let i = 0; i < cars.length; i++) 
 { 
 //delete cars[i].trims[cars[i].trims.length - 1]; 
cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) 
{
  let primoElemento = cars[i].trims[0];

  justTrims.push(primoElemento);
}

console.log(justTrims); 


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++)
{
  let primaLettera = cars[i].color.substring(0, 1); 
  if (primaLettera === 'b') {
    console.log('Frizz');
  } else {
    console.log('Buzz'); 
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let n = 0;

while (numericArray[n] !== 32) {

    console.log(numericArray[n]); 
    n++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let arrayPosizioni = [];

for (let i = 0; i < charactersArray.length; i++) {


switch (charactersArray[i]) {
  case 'a': 
  arrayPosizioni.push(1);
break;

  case 'b': 
  arrayPosizioni.push(2);
break;

  case 'c': 
  arrayPosizioni.push(3);
break;

  case 'd': 
  arrayPosizioni.push(4);
break;

  case 'e': 
  arrayPosizioni.push(5);
break;

  case 'f': 
  arrayPosizioni.push(6);
break;

 case 'g': 
  arrayPosizioni.push(7);
break;

  case 'h': 
  arrayPosizioni.push(8);
break;

case 'i': 
  arrayPosizioni.push(9);
break;

  case 'l': 
  arrayPosizioni.push(10);
break;

  case 'm': 
  arrayPosizioni.push(11);
break;

  case 'n': 
  arrayPosizioni.push(12);
break;

  case 'o': 
  arrayPosizioni.push(13);
break;

  case 'p': 
  arrayPosizioni.push(14);
break;

case 'q': 
  arrayPosizioni.push(15);
break;

case 'r': 
  arrayPosizioni.push(16);
break;

case 's': 
  arrayPosizioni.push(17);
break;

case 't': 
  arrayPosizioni.push(18);
break;

case 'u': 
  arrayPosizioni.push(19);
break;

case 'v': 
  arrayPosizioni.push(29);
break;

case 'z': 
  arrayPosizioni.push(21);
break;

default: 
arrayPosizioni.push('lettera non valida');
break;
}

}


console.log(arrayPosizioni); 