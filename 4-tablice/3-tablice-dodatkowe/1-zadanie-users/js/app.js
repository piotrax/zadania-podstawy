// Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
// Claire Lucas -> clairelucas@memora.com
const tab1 = users.map(el => {
  return `${el.name} -> ${el.email}`;
});
console.log(tab1);

// Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi
const tab2 = users.filter( el => {
  return el.age >= 18;
})
console.log(tab2);

// Zadanie 3
// Wypisz tablicę z wszystkimi kobietami
const tab3 = users.filter( el => {
  return el.gender == "female";
})
console.log(tab3);

// Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"
const tab4 = users.filter(el =>{
  return el.tags.includes("dolor");
});
console.log(tab4);

// Zadanie 5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni
const tab5 = users.every(el => {
      return el.age >= 18;
});
console.log(tab5);

// Zadanie 6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni
const tab6 = users.some(el => {
      return el.age >= 18;
});
console.log(tab6);


// Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami
const tab7 = users.map(el => {
    return el.name.split(" ")[0].toUpperCase();
});
console.log(tab7);

// Zadanie 8
// Wypisz liczbę kobiet i liczbę mężczyzn. Wypisz tekst, która grupa jest liczniejsza (np. "kobiety wygrywają").
const women  = users.filter(el => {
  return el.gender == "female";
});
console.log(`Ilość kobiet: ${women.length}`);
const men  = users.filter(el => {
  return el.gender == "male";
});
console.log(`Ilość mężczyzn: ${men.length}`);
if(women > men){
  winners = "kobiety";
}
else{
  winners = "mężczyźni";
}
console.log(`${winners} zwyciężają!`);
