// Zadanie 1
/* Zadeklaruj tablicę tab z 5 losowymi wyrazami. Wypisz w konsoli tę tablicę i jej długość.
   Następnie wypisz pierwszy i ostatni element oraz ich długość.
   Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. 
   Skorzystaj z pętli for, for of i forEach.
*/
const tab1 = ["abażur", "bohater", "czarny", "dodekafonia", "elektroda"];

console.info(`Pierwszy element tablicy tab1 to: ${tab1[0]}, natomiast ostatni element tej tablicy to: ${tab1[4]}`);

function hr(){
  console.info("--------------------------------");
}

const printTab = item => {
  console.info(`wyraz ${item} ma długość ${item.length}`);
}
tab1.forEach(printTab);
hr();
for(let i = 0; i < tab1.length; i++){
  console.info(`wyraz ${tab1[i]} ma długość ${tab1[i].length}`);
}
hr();
for(let i of tab1){
  console.info(`wyraz ${i} ma długość ${i.length}`);
}

// Zadanie 2
/*Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie. 
  Wykorzystaj odpowiednie metody. 
  Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą console.table()
*/
tab1.push("syrenka");
tab1.unshift("bratek");
console.table(tab1);

// Zadanie 3
// Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.
const del3Elem = tabName => {
   if(tabName.length === 3){
      tabName.pop();
   }
}

hr();
del3Elem(tab1)
console.table(tab1);

// Zadanie 4
//Mamy tablicę:
const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"
]
//Posortuj ją i wypisz w konsoli.
names.sort();
console.table(names);

//Zadanie 5
//Mamy tablicę:
const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]
/*Posortuj ją po długościach kolejnych elementów. 
  Na początku powinien być najkrótszy tekst, na końcu najdłuższy. 
  Następnie napisz, ile liter mają wszystkie elementy razem.
*/
function compare(a, b) {
    if (a.length < b.length) {
        return -1
    }
    if (a.length > b.length) {
        return 1
    }
    return 0
}
tab.sort(compare);
console.table(tab);
let x = 0;
for(let i of tab){
  x += i.length;
}
console.info(`ilość liter wszystkich elementów tablicy tab wynosi: ${x}`);

// Zadanie 6
// Mamy tablicę:
const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]
/* Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.
   Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.
*/

for(let i of tabUsers){
  if(i.age >= 18){
    console.info(i);
  }
}

function adultOnly(tabX){
   for(let i of tabX){
      if(i.age >= 18){
        console.info(i);
    }
  }
}
console.log("------------------------------");
adultOnly(tabUsers);
   
// Zadanie 7
// Napisz funkcję checkPalindrom(txt), która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.
function checkPalindrom(txt){
  txt = txt.toLowerCase();
  let txt2 = "";
  for (let i = txt.length - 1; i > -1; i--) {
    txt2 += txt[i];
  }
  if(txt === txt2){return true}
  else{return false}
}
console.log(checkPalindrom("abecadło"));
console.log(checkPalindrom("anna"));
console.log(checkPalindrom("Anna"));

//Zadanie 8
// Napisz funkcję, która zwróci losową liczbę z przedziału min-max.
function randInRange(min, max){
  //console.log(`${min}, ${max}`);
  let result = Math.floor((Math.random() * max) + min);
  return result;
}
let x = randInRange(3, 33);
console.log(`${x}`);

//Zadanie 9
/*Napisz funkcję generateRandomTable(min, max, count), która zwróci tablicę o długości count,
  w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję 
  z poprzedniego zadania. Wynik odpalenia funkcji podstaw po zmienną, a następnie wypisz ją w konsoli. 
  Następnie wypisz w konsoli największą liczbę w tej tablicy.
*/
function generateRandomTable(min, max, count){
  const tab = [];
  for(let i = 0; i < count; i++){
    tab[i] = randInRange(min, max);
  }
  return tab;
}
generateRandomTable(1,100,20);

// Zadanie 10
/* Stwórz funkcję monthName(nr), która będzie przyjmować tylko jeden 
   atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca
   jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca
   w języku polskim. Wykorzystaj tutaj tablicę.
   Dla przykładu: monthName(10) -> "październik"
*/
function monthName(nr){
  const month = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
  if(nr >= 1 && nr <= 12){
    return month[nr - 1];
  }
  else return false;
}
console.log(monthName(10));
