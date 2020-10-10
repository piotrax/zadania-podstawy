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
console.log(tab2.name);

// Zadanie 3
// Wypisz tablicę z wszystkimi kobietami
const women = [];
let i = 0;
for(let user of users){
  if(user.gender === "female"){
    women[i] = user.name;
    i++;
  };
}
console.log(women);

// Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"
const dolorTag = [];
let j = 0;
for(let user = 0; user < users.length; user++){
  for(let tag = 0; tag < users[user].tags.length; tag++){
    if(users[user].tags[tag] == "dolor"){
      dolorTag[j] = users[user].name;
      j++;
    }
  }
}
console.log(dolorTag);

// Zadanie 5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni
function adultTest(){
  let a = 0;
  for(let user of users){
    if(user.age >= 18){
      a++;
    };
  }
  if(a == users.length){
    return true
  }
  else{
    return false
  }
}
adultTest();

// Zadanie 6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni
function oneAdultTest(){
  let a = 0;
  for(let user of users){
    if(user.age >= 18){
      a++;
    };
  }
  if(a > 0){
    return true
  }
  else{
    return false
  }
}
oneAdultTest();

function oneAdult(){
 for(user of users) {
   //console.log(user);
    if(user.age >= 18){
      return true
    }
    else {
      return false
    }
 }
}
oneAdult();

// Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami
let text = [];
let i = 0;
let arr = [];
for(user of users){
  text = user.name.split(" ");
  arr[i] = text[0].toUpperCase();
  i++;
}
console.log(arr);

// Zadanie 8
// Wypisz liczbę kobiet i liczbę mężczyzn. Wypisz tekst, która grupa jest liczniejsza (np. "kobiety wygrywają").
let women = 0;
let men = 0;
let winners ="";
for(user of users){
  if(user.gender === "female"){
    women++;
  }
  else{
    men++;
  }
 }
console.log(`ilość kobiet: ${women}\nilość mężczyzn: ${men}`);
if(women > men){
  winners = "kobiety";
}
else{
  winners = "mężczyźni";
}
console.log(`${winners} zwyciężają!`);
