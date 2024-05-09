
// # Exercício 01

// ## Soma total

// Faça um programa que cria um array de números.

// Depois calcule e imprima no console a soma de todos os números desse array.

// Exemplo: Para o array **numeros** abaixo

// const numeros = [2, 3, 4, 6];
// let somar = 0;

// for (let i = 0; i < numeros.length; i++) {
//   somar += numeros[i];
// }

// console.log(" a soma de todos os número: " + somar);

// //Exercício 02

// # Múltiplos de 3

// Faça um programa que imprima na tela todos os múltiplos de 3 compreendidos entre 0 e 500.

// Os múltiplos de 3 são: 0, 3, 6, 9, 12...

// Portanto, deverá ser impresso o console da seguinte forma:


// exercicio 2
// for (let i = 0; i <= 500; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
  
// Exercício 05

// ## Filtrando apenas os pares

// Declare um array com alguns números inteiros quaisquer.

// Depois, percorra este array, filtrando apenas os números **pares** e os armazenando em um novo array.

// Ao final, imprima a variável do array contendo apenas os números pares no console.

// Exemplo:

// Para o array **original** abaixo



  //exercicio 3

//   const original = [1, 4, 12, 21, 53, 88, 112];
// let pares = []

// for (let i = 0; i < original.length; i++) {
//     if (original[i] % 2 === 0) {

//         pares.push(original[i])

//         console.log(`o numero ${original[i]} é par`);
//     }
// }
//  console.log(pares)


// exercicio 4

// ## Soma dos pares

// Declare um array com alguns números inteiros quaisquer.

// Depois, percorra este array e calcule a **soma dos números pares** presentes nesse array.

// Exemplo:

// Para o array **numeros** abaixo

// ```javascript
// const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

// // seu codigo aqui
// ```

// Deverá ser impresso no console:

const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        soma += numeros[i];
    }
}

console.log(soma);
