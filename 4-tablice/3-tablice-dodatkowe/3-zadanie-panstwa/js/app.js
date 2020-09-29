// Zadanie 1
/* Wypisz wszystkie nazwy państw Jak już wypiszesz, albo to zadanie zakomentuj 
   (bo będziesz miał bałagan w konsoli), albo obejmij poleceniami console.groupCollapsed("Nazwy państw");
   i console.groupEnd();, albo po kodzie zastosuj console.clear() 
   Wypisz ile jest razem ludności we wszystkich państwach
*/
let ludnosc = 0;
console.groupCollapsed("Nazwy państw");
for(country of countries){
  console.log(country.name);
  ludnosc += country.population;
}
console.groupEnd();
console.log(`razem ludność we wszystkich państwach: ${ludnosc}`);

// Zadanie 2
// Wypisz średnią ludność w państwach
