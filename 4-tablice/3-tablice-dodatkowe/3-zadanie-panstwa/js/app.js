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
avgFertility = () => {
  let fertility = 0;
  let counter = 0;
  for(country of countries){
    if(country.fertility_rate != null){
      fertility += country.fertility_rate;
      counter++;
    }
  }
  return (fertility/counter).toFixed(2);
}
console.log(`średnia dzietność na świecie: ${avgFertility()}`);

// Zadanie 7
// Napisz ile wynosi średnia wieku na świecie
avgAge = () => {
  let age = 0;
  let counter = 0;
  for(country of countries){
    if(country.medium_age != null){
      age += country.medium_age;
      counter++;
    }
  }
  return (age/counter).toFixed(2);
}
console.log(`średnia wieku na świecie: ${avgAge()}`);

// Zadanie 8
// Wypisz wszystkie dane na temat Polski
for(const info in countries[36]){
  console.log(`${info} : ${countries[36][info]}`);
}

// Zadanie 9
// Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?
