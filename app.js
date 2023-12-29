alert("Boas Vindas ao jogo do numero secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
    // se chute for igual a numero secreto
    if(numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}
