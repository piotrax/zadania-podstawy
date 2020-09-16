// Zadanie 1 Mamy tekst: Koty to fajne zwierzaki Wypisz w konsoli liczbę wyrazów w tym zdaniu.

let tekst = "Koty to fajne zwierzaki";

function display(){
  let x = 1;
  for(let i in tekst){
    if (tekst[i] === " "){
      x += 1;
    }
  }
  console.log(`Ilość wyrazów w stringu wynosi: ${x}.`);
  //document.getElementById("info").textContent =
  //  "Ilość wyrazów w stringu wynosi: " + x +".";
  
  
}

// Zadanie 2: Za pomocą funkcji Prompt() pobierz od użytkownika jego imię.
//            Następnie używając odpowiednich funkcji dla stringów wypisz 
//            w konsoli to imię tak by było pisane małymi,
//            literami a rozpoczynało się od dużej litery

const imie = prompt("podaj swoje imię: ").toLowerCase();
const tab = [...imie];
tab[0] = tab[0].toUpperCase();
let name = ""
for(let i in tab){
  name +=(tab[i]);
}
console.log(`Witaj ${name}`);

//Zadanie 3

const text = "Ala ma Dakota";

if (text.includes("kot")) {
    console.log("Zdanie zawiera słowo kot");
} else {
    console.log("Zdanie nie zawiera słowo kot" );
}

//Zadanie 4

console.log(text.toLowerCase());
console.log(text.toUpperCase());

let tab = [...text];
console.log(tab.length);
if(tab.length % 2 === 0){ // poprawnie działa tylko przy parzystej liczbie znaków w stringu
  let text2 ="";
  for(let i = 0; i < tab.length; i += 2){
    text2 += tab[i].toUpperCase();
    text2 += tab[i+1].toLowerCase();
  }
  console.log(text2);
}

let text3 = text.replace("Ala", "John");
console.log(text3);

// Zadanie 5
// Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. 
// Możesz skorzystać ze wzoru Math.floor(Math.random()*(max-min+1)+min). 
// Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednym rzędzie. 
let min = 1;
let max = 100000;
tabr = [];
for (let i = 0; i < 10; i++){
  tabr[i] = Math.floor(Math.random()*(max-min+1)+min);
  console.log(tabr[i].padStart(10, "x"));
}
