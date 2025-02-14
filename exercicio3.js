//variável (exemplo) para verificar se o número é positivo, negativo ou zero.

let numero = 5;

// condicional para verificar se o número é positivo, negativo ou zero.
if (numero >0){
    console.log("O número: " + numero + " é positivo.");
} else if (numero <0){
    console.log("O número: " + numero + " é negativo.");
} else{
    console.log("O número: " + numero + " é zero.")
}

// Criação de um loop com "for" para imprimir número de 1 a 10.

for(let i = 1; i < 11; i++){
    console.log("Contador: ", i)
}

// criação de loop com "While" para soma números de 1 a 5.
let soma = 0;
let outroNumero = 1;

while (outroNumero <=5) {
    soma += outroNumero;
    outroNumero++;
}

console.log("A soma dos números de 1 a 5 é: ", soma);
