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

//Zadanie 2
//Wypisz średnią ludność w państwach
srednieZaludnienie = () => {
  let ludnosc = 0;
  for(country of countries){
    ludnosc += country.population;
  }
  return Math.floor(ludnosc/countries.length);
}
console.log(`Srednie zaludnienie: ${srednieZaludnienie()}`);

//Zadanie 3
// Wypisz ile jest państw, które mają dodatni wzrost
growPlus = () => {
  let plus = 0;
  for(country of countries){
    if(country.grow > 0) plus++;
  }
  return plus;
}
console.log(`ilość państw z dodatnim przyrostem naturalnym: ${growPlus()}`);

// Zadanie 4
// Wypisz ile jest państw, które mają ujemny wzrost
growMinus = () => {
  let minus = 0;
  for(country of countries){
    if(country.grow < 0) minus++;
  }
  return minus;
}
console.log(`ilość państw z ujemnym przyrostem naturalnym: ${growMinus()}`);

//Zadanie 5
//Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
area = () => {
  let pow = 0;
  for(country of countries){
    pow += country.land_area_in_km;
  }
  return pow;
}
console.log(`powierzchnia wszystkich państw: ${area()} km2`);

// Zadanie 6
// Napisz ile wynosi średnia dzietności na świecie (fertility_rate) 
// (uwaga - niektóre kraje nie mają danych - wtedy jest null)
