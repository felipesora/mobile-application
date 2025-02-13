/* ================================
 * Estruturas de Controle  
 * ================================
 * Escreva um programa que:  
 * 
 * 1- Use if/else para verificar se um número é positivo, negativo ou zero.
 * 2- Use um loop for para imprimir os números de 1 a 10. 
 * 3- Use um loop while para calcular a soma dos números de 1 a 5. 
 */

// 1
let numero = 4

if (numero > 0) {
    console.log(`O número ${numero} é positivo`);
} else if (numero < 0){
    console.log(`O número ${numero} é negativo`);
} else {
    console.log(`O número é igual a 0`);
}

// 2
console.log("Contanto de 1 a 10 usando 'for':");

for (let i = 1; i <= 10; i++){
    console.log(i);
    
}

// 3 

let soma = 0; 
let j = 1; 

console.log("Somando de 1 a 5 usando 'while':");

while (j <= 5) {
    soma += j;
    j++;
}

console.log("A soma dos números de 1 a 5 é:", soma);

/*
 * Crie um sistema de menu usando switch-case:
 *
 * - Se o usuário digitar "A", exiba "Opção A selecionada".  
 * - Se digitar "B", exiba "Opção B selecionada".  
 * - Para outras entradas, exiba "Opção inválida".
 * 
 * Use um loop do-while para repetir o menu até o usuário digitar "S" (saída).  
 */

// Usando prompt para pegar a entrada (ambiente de navegador)
let opcao;

do {
    console.log("\nSelecione uma opção:");
    console.log("A - Opção A");
    console.log("B - Opção B");
    console.log("S - Sair");

    opcao = prompt("Digite a opção desejada (A, B, ou S):").toUpperCase();

    switch (opcao) {
        case 'A':
            console.log("Opção A selecionada");
            break;
        case 'B':
            console.log("Opção B selecionada");
            break;
        case 'S':
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }
} while (opcao !== 'S');
