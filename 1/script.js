let idades = [];
for (let i = 1; i <= 4; i++) {
    let idade = prompt(`Digite a idade da ${i}ª pessoa:`);
    
    idades.push(Number(idade));
}

console.log("Idades armazenadas no vetor:", idades);

let maiorIdade = idades[0];
let posicaoMaior = 0;

for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaior = i;
    }
}

console.log(`Vetor completo de idades: [${idades.join(", ")}]`);
console.log(`A maior idade digitada foi: ${maiorIdade}`);
console.log(`Ela foi digitada na posição: ${posicaoMaior + 1}`);