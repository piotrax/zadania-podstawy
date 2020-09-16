// Zadanie 1
// Za pomocą pętli wypisz w konsoli tekst 12345678910
let x = "";
for (let i = 1; i < 11; i++){
  x += i;
}
console.log(x);
// lub
const tab1 = [];
for (let i = 1; i < 11; i++){
  tab1[i] = i;
}
console.log(tab1.join(""));

//Zadanie 2
// Stwórz zmienną n, pod którą postawisz jakąś liczbę całkowitą z przedziału 1-10 oraz dodatkową zmienną txt, która będzie zawierać jakiś tekst np. kot.
// Sprawdź czy liczba n jest dodatnia. Jeżeli jest wypisz w konsoli tekst, który będzie powtórzeniem n razy tekstu ze zmiennej txt.
let n = 7;
let txt = "mysz";
if(n > 0){
  for(let i = 0; i < n; i++){
    console.log(txt);
  }
}

// Zadanie 3
/* Wygeneruj i wypisz w konsoli tekst:
╔═══════════════════════╗
║  To jest jakiś tekst  ║
╚═══════════════════════╝
Tekst w ramce powinien być postawiony pod zmienną, tak by łatwo można było go zmienić. Narożniki wygeneruj po prostu kopiując odpowiedni znaki z powyższego przykładu. */
