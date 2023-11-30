/* function sum (n1, n2){
  return n1 + n2
}

console.log(sum(2,3)) */

function sum(...args){
  /* for (const valores of args) {
    total += valores
  } */

  const initialValue = 0
  const total = args.reduce((acumulator, curentValue) => acumulator + currentValue, initialValue
  );


  return total;
}

console.log(sum(1, 3, 5, 6, 8, 10))