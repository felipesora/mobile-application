/* ================================
 * Funções e Escopo  
 * ================================
 * 
 * 1- Crie uma função tradicional converterParaMaiusculas que recebe uma string e retorna ela em maiúsculas.   
 * 2- Reescreva-a como arrow function. 
 * 3- Declare uma variável mensagem dentro da função e tente acessá-la fora. Explique o erro em comentários.  
 */

function converterParaMaiusculas(str) {
    return str.toUpperCase()
}
let resultado = converterParaMaiusculas("olá mundo");
console.log("Função tradicional:", resultado);


const converterParaMaiusculasArrow = (str) => str.toUpperCase();

resultado = converterParaMaiusculasArrow("olá mundo");
console.log("Arrow function:", resultado);

// function exemploEscopo() {
//     let mensagem = "Olá, isso está dentro da função!";
// }
// console.log(mensagem);

/*
Explicação do erro:
A variável 'mensagem' foi declarada dentro da função 'exemploEscopo'. 
Isso significa que ela tem escopo local, ou seja, ela só pode ser acessada dentro da própria função. 
Assim, quando tentamos acessar a variável 'mensagem' fora da função, o JavaScript lança um erro, porque ela não está visível fora do escopo da função. 
*/

/*
 * 1- Crie uma função processarDados que aceita um callback como parâmetro (ex: imprime "Processo concluído").     
 * 2- Implemente uma função assíncrona buscarUsuario que retorna um objeto { nome: "Fulano", id: 1 } após 1 segundo. Use .then() para exibir o resultado.  
 */

// 1 
function processarDados(callback){
    console.log("Processando dados...");
    callback();
}

processarDados(() => console.log("Processo concluído!"));

// 2
function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "Fulano", id: 1})
        }, 1000);
    });
}

buscarUsuario().then((usuario) => {
    console.log("Usuário encontrado:")
    console.log("Id:",usuario["id"]);
    console.log("Nome:",usuario["nome"]);
    
}).catch((erro) => {
    console.log("Erro: ", erro);
    
})