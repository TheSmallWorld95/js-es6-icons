// Si scriva una funzione che accetti tre argomenti,
// un array e due numeri (a più piccolo di b).
//
// La funzione ritornerà un nuovo array con i valori che hanno
// la posizione compresa tra i due numeri
const numbers = [];

for (var i = 0; i < 20; i++) {
  numbers.push(randomNumberInRange(1,20))
}
a = randomNumberInRange(1, 10)
b = randomNumberInRange(1, 10)



// divide(array, a, b) => {
function filter(array, a, b) {
  if (a < b) {
    const arrayFiltered = array.filter((element, i) => {

      return i >= a && i <= b

    })
    return arrayFiltered
  } else {
    let temp = b;
    b = a;
    temp = a
    const arrayFiltered = array.filter((element, i) => {

      return i >= a && i <= b

    })
    return arrayFiltered
  }

}
// }
console.log(numbers, a, b);
console.log(filter(numbers, a, b));



// FUNCTIONS
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
