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

let text = "Ala ma kota";

if (text.includes("kot")) {
    console.log("Zdanie zawiera słowo kot");
} else {
    console.log("Zdanie nie zawiera słowo kot" );
}

//Zadanie 4

console.log(text.toLowerCase());
text = text.toUpperCase();
console.log(text);

let tab = [...text];
console.log(tab.length);
let text2 ="";
for(let i in tab){
  if(i % 2 > 0){
    text2 += tab[i].toLowerCase();
  }
  else {
    text2 += tab[i];
  }
}
console.log(text2);

// Zadanie 5
// Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. 
// Możesz skorzystać ze wzoru Math.floor(Math.random()*(max-min+1)+min). 
// Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednym rzędzie. 
let min = 10;
let max = 100000;
tabr = [];
for (let i = 0; i < 10; i++){
  tabr[i] = Math.floor(Math.random()*(max-min+1)+min).toString();
  console.log(tabr[i].padStart(10, " "));
}

// Zadanie 6
// Wygeneruj pod zmienną uniqueID tekst będący losowym ciągiem liter i cyfr o długości 20 znaków. Nie narzucam tutaj sposobu rozwiązania.
let min = 48;
let max = 126;
tabr = [];
let uniqueID = "";
for (let i = 0; i < 20; i++){
  tabx[i] = Math.floor(Math.random()*(max-min+1)+min);
}
for (let j in tabx){
  uniqueID += String.fromCharCode(tabx[j]);
}
console.log(uniqueID);

// Zadanie 7
// Stwórz zmienną x równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst: Liczba x * x da w wyniku x*x
// Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.
let x = 7;
console.log(`Liczba x równa się ${x}`);
console.log(`Liczba x * x da w wyniku ${x*x}`);
