//Função para converter o texto todo em letra maiúscula.

function converterParaMaiuscula(texto){
    return texto.toUpperCase();
}
const converterParaMaiusculasArrow = texto =>texto.toUppercase();

console.log(converterParaMaiuscula("Teste"));
console.log(converterParaMaiusculasArrow("teste"));

function exemploEscopo() {
    let mensagem = "Hello, world!";
}

//O console reporta que "texto.toUpperCase" não é uma function.