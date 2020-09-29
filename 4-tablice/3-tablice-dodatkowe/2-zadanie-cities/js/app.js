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
