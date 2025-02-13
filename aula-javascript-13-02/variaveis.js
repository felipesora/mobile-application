/* ================================
 * Variáveis e Tipos de Dados
 * ================================
 *
 * Crie um script que declare as seguintes variáveis:
 * - nome (string com seu nome completo).
 * - idade (número inteiro).
 * - aprovado (boolean indicando se você está aprovado em um curso fictício).
 * - notas (array com três números representando notas de provas).
 * - usuario (objeto com email e senha como propriedades).
 *
 * Imprima todas as variáveis no console e explique a diferença entre null e undefined em comentários.
 */

const nome = "Felipe";
let idade = 19;
let aprovado = true;
const notas = [8, 9.5, 10];

let usuario = {
    email: "felipe@email.com",
    senha: "123#"
};

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Aprovado:", aprovado);
console.log("Notas:", notas);
console.log("Usuário:", usuario);

/* 
 * ================================
 * Diferença entre null e undefined
 * ================================
 *
 * - undefined: Significa que a variável foi declarada, mas ainda não recebeu um valor.
 *   Também pode ocorrer quando tentamos acessar uma propriedade inexistente de um objeto.
 *
 * - null: Representa a ausência intencional de um valor. O programador define null quando
 *   quer indicar que algo está vazio ou não foi inicializado de propósito.
 */

/* 
 * Crie duas variáveis:
 *
 * valorNulo intencionalmente definida como null.  
 *  
 * valorIndefinido declarada sem atribuição.  
 * 
 * Faça uma condicional que verifica se cada variável é null ou undefined e imprima o resultado.  
 */


let valorNulo = null;
let valorIndefinido;

if (valorNulo === null){
    console.log("A variável 'valorNulo' tem o valor: null")
} else {
    console.log("A variável 'valorNulo' tem o valor: undefined")
}

if (valorIndefinido === undefined){
    console.log("A variável 'valorIndefinido' tem o valor: undefined")
} else {
    console.log("A variável 'valorIndefinido' tem o valor: null")
}