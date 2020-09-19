// Zadanie 1
/* Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.
   Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu.
   Wynik jej użycia wypisz w konsoli za pomocą console.info
*/
function textInfo(txt){
  console.info(txt.length);
}
textInfo("To jest tekst do sprawdzenia czy funkcja policzy ilość liter oraz spacji. Powinno być ich razem 100.");

// Zadanie 2
/* Napisz funkcję, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.
   Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.
*/
function sumArray(arr){
	let sum = 0;
	for(let i in arr){
		sum += arr[i]
	}
	console.info(`Suma tablicy wynosi ${sum}.`);
}
myArr = [12, 98, 55, 28, 76, 52, 8, 43];
sumArray(myArr);

// Zadanie 3
// Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:
let tekst = prompt("Wpisz dowolny tekst:");

function funnyText(text){ 
  if(text.length % 2 > 0){
    text += " ";
  }
  let tab = [...text];
  let outText = "";
  for(let i = 0; i < tab.length; i += 2){
      outText += tab[i].toUpperCase();
      outText += tab[i+1].toLowerCase();
  } 
  console.info(outText);
}
funnyText(tekst);

// Zadanie 4
/* Napisz funkcję, która będzie wymagać 2 atrybutów. Funkcja niech sprawdza, czy oba atrybuty są liczbami.
   Funkcja ma zwracać iloczyn (*) obu liczb. Jeżeli któryś z atrybutów nie jest liczbą, funkcja niech zwraca false.
*/
let liczba1 = prompt("Podaj mnożną:");
let liczba2 = prompt("Podaj mnożnik:");

function pomnoz(num1, num2){
	let mul = parseInt(num1) * parseInt(num2);
	if(mul !== (num1 * num2)){
		console.info("Co najmniej jeden z podanych czynników nie jest liczbą.");
	}
	else{
		console.info(`Wynik mnożenia ${num1} i ${num2} wynosi ${mul}`);
	}
}
pomnoz(liczba1, liczba2);

// Zadanie 5
/* Napisz funkcje, która przyjmuje 2 parametry:
imię - np: Ala
miesiac - np: styczen
Funkcja ma zwracac:
jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"
jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"
jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"
Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.
Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami.
Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"
*/
