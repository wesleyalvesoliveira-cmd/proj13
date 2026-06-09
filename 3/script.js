let listaPessoas = [];
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o nome da pessoa:");
    let altura = parseFloat(prompt(`Digite a altura de ${nome} (ex: 1.75):`));

    if (nome && !isNaN(altura)) {
        listaPessoas.push({ nome: nome, altura: altura });
    } else {
        alert("Dados inválidos. Esta entrada não foi computada.");
    }

    let resposta = prompt("Deseja inserir mais alguém? (S/N)").toUpperCase();
    if (resposta !== 'S') {
        continuar = false;
    }
}

console.log("--- Pessoas Cadastradas ---");
console.log(listaPessoas);

listaPessoas.forEach(p => {
    console.log(`${p.nome} tem ${p.altura.toFixed(2)}m de altura.`);
});