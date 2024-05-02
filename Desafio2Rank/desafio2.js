function stv() {
    let vitoria = 50;
    let derrota = 23;

    for (;;) {
        if (isNaN(vitoria) || !Number.isInteger(vitoria)) {
            console.log("Erro: 'vitoria' não é um número inteiro");
            return null; // Retorna null se 'vitoria' não for um número inteiro
        }
        if (isNaN(derrota) || !Number.isInteger(derrota)) {
            console.log("Erro: 'derrota' não é um número inteiro");
            return null; // Retorna null se 'derrota' não for um número inteiro
        }
        break; // Sai do loop se 'vitoria' e 'derrota' forem números inteiros
    }  

    let sub = vitoria - derrota;
    return sub; //  node Desafio2Rank/desafio2.js
}

let posicao = stv();
let rank;

    if(posicao <= 10){
        rank = "Ferro"
    }
    else if(posicao <= 20){
        rank = "Bronze"
    }
    else if(posicao <= 50){
        rank = "Prata"
    }
    else if(posicao <= 80){
        rank = "Ouro"
    }
    else if(posicao <= 90){
        rank = "Diamante"
    }
    else if(posicao <= 100){
        rank = "Lendario"
    }
    else if(posicao >= 101){
        rank = "Imortal"
    }

console.log("O Herói tem de saldo de **" + posicao + "** está no nível de, **" + rank + "**")