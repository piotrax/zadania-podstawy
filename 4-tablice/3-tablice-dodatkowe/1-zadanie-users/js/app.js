// Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
// Claire Lucas -> clairelucas@memora.com
for(let user of users){
  console.log(`${user.name} -> ${user.email}`);
}

// Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi
const adults = [];
let i = 0;
for(let user of users){
  if(user.age >= 18){
    adults[i] = user.name;
    i++;
  };
}
console.log(adults);

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
