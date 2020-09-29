// Zadanie 1
// Wypisz ile miast jest w Polsce
console.log(`ilość miast w Polsce: ${cities.length}`);

// Zadanie 2
// Wypisz ile jest ludzi w tych miastach
citizens = 0;
for(city of cities){
  citizens += city.people;
}
console.log(`Ogółem liczba mieszkańców we wszystkich polskich miastach wynosi: ${citizens}`);

// Zadanie 3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
const findCity10k = cities.find(city => {
  return city.people > 10000;
})
console.log(`Pierwsze znalezione miasto, które zamieszkuje ponad 10000 mieszkańców to ${findCity10k.name}`);

// Zadanie 4
// Wypisz miasta, w których ludzi jest ponad średnią
let sum = 0;
for(city of cities){
  sum += city.people;
}
let cityCount = cities.length;
let avg = sum/cityCount;
console.log(`${sum}, ${cityCount}, ${avg}`);
let counter = 0;
for(city of cities){
  if(city.people > avg){
    console.log(city.name);
  }
}

// Zadanie 5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
for(city of cities){
  if(city.people > 10000){
    console.log(city.name);
  }
}

// Zadanie 6
// Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych
let bigger = 0;
let smaller = 0;

for(city of cities){
  if(city.people > 10000){
    bigger++;
  }
  else{
    smaller++;
  }
}
if(bigger > smaller) console.log(`Miast z > 10000 mieszkańców jest wiecej.`)
else console.log(`Miast poniżej 10000 mieszkańców jest wiecej.`);
