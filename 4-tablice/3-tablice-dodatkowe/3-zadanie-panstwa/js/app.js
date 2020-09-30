// Zadanie 1
/* Wypisz wszystkie nazwy państw Jak już wypiszesz, albo to zadanie zakomentuj 
   (bo będziesz miał bałagan w konsoli), albo obejmij poleceniami console.groupCollapsed("Nazwy państw");
   i console.groupEnd();, albo po kodzie zastosuj console.clear() 
   Wypisz ile jest razem ludności we wszystkich państwach
*/
let nazwyPanstw = countries.map(el =>{
  return el.name});
console.log(nazwyPanstw);
let ludnosc = countries.reduce(function(prev, curr){
  return prev + curr.population;
}, 0);
console.log(`ilość ludności na świecie: ${ludnosc}`);

//Zadanie 2
//Wypisz średnią ludność w państwach
let zaludnienie = countries.reduce(function(prev, curr){
  return prev + curr.population;
}, 0);
console.log(`Srednie zaludnienie: ${Math.floor(zaludnienie/countries.length)}`);

//Zadanie 3
// Wypisz ile jest państw, które mają dodatni wzrost
let growPlus = countries.filter(el => el.grow > 0).length;
console.log(`ilość państw z dodatnim przyrostem naturalnym: ${growPlus}`);

// Zadanie 4
// Wypisz ile jest państw, które mają ujemny wzrost
let growMinus = countries.filter(el => el.grow < 0).length;
console.log(`ilość państw z ujemnym przyrostem naturalnym: ${growMinus}`);

//Zadanie 5
//Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
let area = countries.reduce(function(prev, curr) {
  return prev + curr.land_area_in_km;
}, 0);
console.log(`wszystkie państwa zajmują: ${(area/510e6*100).toFixed(2)} procent powierzchni Ziemi`);

// Zadanie 6
// Napisz ile wynosi średnia dzietności na świecie (fertility_rate) 
// (uwaga - niektóre kraje nie mają danych - wtedy jest null)
const countriesWithFertility = countries.filter(el => el.fertility_rate != null);
let dzietnosc = countriesWithFertility.reduce(function(prev, curr){
  return prev + curr.fertility_rate;
}, 0);
console.log(`średnia dzietność na świecie: ${(dzietnosc/countriesWithFertility.length).toFixed(2)}`);

// Zadanie 7
// Napisz ile wynosi średnia wieku na świecie
const ageTab = countries.filter(function(el){
  return el.medium_age != null;
});
let sumaWieku = ageTab.reduce(function(prev, curr){
  return prev + parseInt(curr.medium_age);
}, 0);
console.log(`średnia wieku na świecie: ${(sumaWieku/ageTab.length).toFixed(2)}`);

// Zadanie 8
// Wypisz wszystkie dane na temat Polski
for(const info in countries[36]){
  console.log(`${info} : ${countries[36][info]}`);
}

// Zadanie 9
// Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?
let difference = avgAge() - countries[36].medium_age;
if (difference < 0){
  console.info(`średnia wieku w Polsce jest wyższa od średniej światowej o ${difference.toFixed(2)} lat`);
}
else{
  console.info(`średnia wieku w Polsce jest niższa od średniej światowej o ${difference.toFixed(2)} lat`);
}
