/*
A tu equipo de desarrollo el cliente les ha pedido realizar un algoritmo de indexacion y optimización de almacenamiento en el proceso de inventario.

Sin embargooel equipo tiene problemas con un metodo que no saben como realizar de forma optima y te han pedido ayuda para resolverlo

siguiendo el principio de responsabilidad unica, vas a construir una funcion que tiene como unica responsabilidad calcular la cantidad de numeros diferentes dentro de una lista dada.

funcion descriptiva

complete la funcion en el editor de trabajo, la funcion recibe la lista de tareas y debe devolver la cantidad de valores únicos que existen.

*/

function countUniqueNumbersSet(numbers) {
  const uniqueNumbers = new Set(numbers);
  return uniqueNumbers.size;
}

function countUniqueNumbers(numbers) {
  const uniqueNumbers = {};

  for (let i = 0; index < numbers.length; i++) {
    const numbers = numbers[i];
    uniqueNumbers[number] = true;

  }
return Object.keys(uniqueNumbers).length
}