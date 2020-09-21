// Zadanie 1
/* Zadeklaruj tablicę tab z 5 losowymi wyrazami. Wypisz w konsoli tę tablicę i jej długość.
   Następnie wypisz pierwszy i ostatni element oraz ich długość.
   Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. 
   Skorzystaj z pętli for, for of i forEach.
*/
const tab1 = ["abażur", "bohater", "czarny", "dodekafonia", "elektroda"];
console.info(`Pierwszy element tablicy ${tab1} to : ${tab1[0]}, natomiast ostatni element tej tablicy to: ${tab1[4]}`);
const tab1 = ["abażur", "bohater", "czarny", "dodekafonia", "elektroda"];
console.info(`Pierwszy element tablicy tab1 to: ${tab1[0]}, natomiast ostatni element tej tablicy to: ${tab1[4]}`);

function hr(){
  console.info("--------------------------------");
}

const printTab = item => {
  console.info(`wyraz ${item} ma długość ${item.length}`);
}
tab1.forEach(printTab);
hr();
for(let i = 0; i < tab1.length; i++){
  console.info(`wyraz ${tab1[i]} ma długość ${tab1[i].length}`);
}
hr();
for(let i of tab1){
  console.info(`wyraz ${i} ma długość ${i.length}`);
}
