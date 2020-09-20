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
  text = text.toUpperCase();
  let tab = [...text];
  let outText = "";
  for(let i in tab){
    if(i % 2 == 0){
      outText += tab[i];
    }
    else {
      outText += tab[i].toLowerCase();
    }
  } 
  console.info(outText);
  return outText;
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
function whatDo(name, month){
  let month1 = month.toLowerCase();
  switch(month1) {
    case "grudzien":
	case "styczen":
	case "luty":
      console.info(`${name} jezdzi na sankach`);
    break;
    case "marzec":
	case "kwiecien":
	case "maj":
      console.info(`${name} chodzi po kałużach`);
    break;
	case "wrzesien":
	case "pazdziernik":
	case "listopad":
	  console.info(`${name} zbiera liście`);
	break; 
    default:
    console.info(`${name} uczy się JS`);
  }
}
const imie = prompt("Podaj swoje imię:");
const miesiac = prompt("Podaj miesiąc:");
whatDo(imie, miesiac);

// Zadanie 6
/*Mamy przykładowy tekst:
  const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
  Napisz funkcję, która przyjmie 2 atrybuty:
  tekst
  znak rozdziału (np. |)
  Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. 
  W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. 
  Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. 
  Skorzystaj tutaj z innej odpowiedniej metody js.
  input -> "Ania|Marcin|Bartek" output -> "Ania|Bartek|Marcin"
  Wywołaj tę funkcję przekazując do niej str z początku zadania
*/
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

function stringToArray(tekst, divSign){
	const tab =	tekst.split(divSign);
    tab.sort();
    let outString = "";
    for (let i in tab){
    outString += tab[i] + divSign;
    }
	console.info(outString);
}
stringToArray(str, "|");

// Zadanie 7
/*Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.
  Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.
  input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
  output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
  output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
*/
const input = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
const output1 = [];
const output2 = [];

function wielkieLitery(item){
  for(let i = 0; i < item.length; i++){
    output1[i] = item[i].toUpperCase();
  }
}


function funnyTab(item){
  for(let i = 0; i < item.length; i++){
    output2[i] = funnyText(item[i]);
  }
} 

console.info(input);
wielkieLitery(input);
console.info(output1);
funnyTab(input);
console.info(output2);

// Zadanie 8
/*Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
  Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię, 
  w przeciwnym wypadku męskie. Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie. 
  Przykładowo:
  checkFemale("Ania") === true
  checkFemale("Marcin") === false
  */
  function checkFemale(name){
    if(name.substr(name.length - 1, 1) === "a"){
      return true;
    }
    else {
      return false;
    }
  }

  checkFemale("Zuzanna");

// Zadanie 9
/*Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej. 
Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet. 
Wykorzystaj tutaj funkcję z poprzedniego zadania. Jak pobrać imię z usera? 
Możesz to osiągnąć za pomocą metody split(). Podziel string na 2 części - uzyskasz tablicę 2 elementów. 
Pierwszy to imię, drugi to nazwisko
*/
