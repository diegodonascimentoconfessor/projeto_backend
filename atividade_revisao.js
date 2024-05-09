/*  # Exercício 01

## Pedra, papel ou tesoura

Duas pessoas estão jogando pedra, papel ou tesoura. Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.

```javascript=
const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
```

Neste caso seu código deveria imprimir `pedra`.

Lembre-se de testar seu código para outras variações de entrada

*/


/* 1 exercicio 
const jogada1 = "tesoura";
const jogada2 = "pedra";

if (jogada1 === jogada2) {
    console.log("empate");
    
} else if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log(jogada1);

} else if (jogada1 === "tesoura" && jogada2 === "papel") {

    console.log(jogada1);

} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log(jogada1);

} else {

    console.log(jogada2);
}



 /* 2 - exercicio 
 # Exercício 02

## Par ou ímpar

Duas pessoas estão jogando par ou ímpar. Você deve imprimir "par" caso a vencedora seja a pessoa que escolheu par e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar.

```javascript=
const jogada1 = 5;
const jogada2 = 3;

//seu código aqui

```

A resposta deste exemplo é `par`.

Lembre-se de testar seu código para outras variações de entrada.
*/

/*
const jogadaor1 = 5;
const jogador2 = 3;

const soma = jogada1 + jogada2;

if (soma % 2 === 0) {
    console.log("impar");
} else {
    console.log("par");
}

*/

const jogadaor3 = 5;
const jogador4 = 2;
const valor = jogada1 + jogada2;

if (valor % 2 === 0) {
    console.log("impar");
} else {
    console.log("par");
}







/*   
# Exercício 03

## Dominó

Num jogo de dominó toda pedra tem dois números. Quando uma pedra tem o mesmo número dos dois lados, dizemos que essa pedra é uma bucha. Faça um programa que imprima "SIM" caso a pedra seja uma bucha e "NÃO" caso contrário.

```javascript=
const ladoA = 3;
const ladoB = 3;

//seu código aqui
```

Neste exemplo a resposta correta é `SIM`.

Lembre-se de testar seu código para outras variações de entrada.

*/

const ladoa  = 3;
const ladob= 3;

if (ladoa === ladob) {
    console.log("sim");
} else {
    console.log("não");
}



const ladoc = 6;
const ladod = 6;

if (ladoc=== ladod) {
    console.log("sim");
} else {
    console.log("não");
}


const ladoe= 4;
const ladof = 6;

if (ladoe === ladof) {
    console.log("sim");
} else {
    console.log("não");
}



 /*
# Exercício 04

## Peneira de Vôlei

Numa "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes, o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. Faça um programa que, dada a altura de um determinado candidato, diga se ele está aprovado ou reprovado nessa primeira fase do processo.

Imprima na tela **APROVADO** caso o jogador tenha 180cm de altura ou mais
Imprima na tela **REPROVADO** caso o jogador tenha menos de 180cm

```javascript
const alturaEmCm = 185;

//seu código aqui
```

Neste exemplo a resposta correta é `APROVADO`




*/
const alturaEmCm = 185;

if (alturaEmCm >= 180) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}


const altura = 175;

if (altura >= 180) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}

