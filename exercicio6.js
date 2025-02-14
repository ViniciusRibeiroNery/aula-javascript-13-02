// criação da function callback
function processarDados(callback){
    console.log("Processando dados...");
    setTimeout(() =>{
        callback();
    }, 1000);  
}
async function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "André", id: 1 });
        }, 1000);
    });
}

buscarUsuario().then(usuario => {
    console.log("usuário encontrado", usuario);
});

processarDados(() =>{
    console.log("Processo concluído");
});
