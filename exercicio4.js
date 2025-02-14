//Váriavel criada para switch.

let letra;

//switch case para selecionar opções disponíveis
do{
    letra = prompt("Escolha uma opção:\nA - Opção A\nB - opção B\nS - sair").toUpperCase();
        //"if" para não digitar opções que não existem. 
        if (letra !== "A" && letra !== "B" && letra !== "S"){
            console.log("Opção inválida. por favor, digite novamente")
        }
        
        switch (letra){
            default:
                console.log("Escolha outra opção.")

            case "A":
                console.log("A letra escolhida foi A")
                break;
            
            case "B": 
                console.log("A letra escolhida foi B.")
                break;

            case "S":
                console.log("Opção sair selecionada.")
        }
}while (letra !=="S");