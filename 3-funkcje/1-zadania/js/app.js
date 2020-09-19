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
