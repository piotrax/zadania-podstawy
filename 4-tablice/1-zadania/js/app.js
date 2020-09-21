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
