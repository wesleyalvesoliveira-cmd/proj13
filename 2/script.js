let nomes = [];
let sexos = [];
let salarios = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do ${i + 1}º funcionário:`);
    let sexo = prompt(`Digite o sexo do ${i + 1}º funcionário (M/F):`).toUpperCase();
    let salario = parseFloat(prompt(`Digite o salário do ${i + 1}º funcionário:`));

    nomes.push(nome);
    sexos.push(sexo);
    salarios.push(salario);
}

console.log("--- LISTAGEM: Mulheres que ganham mais de R$ 5.000 ---");

let encontrouFiltro = false;

for (let i = 0; i < 5; i++) {
    if (sexos[i] === 'F' && salarios[i] > 5000) {
        console.log(`Nome: ${nomes[i]} | Sexo: ${sexos[i]} | Salário: R$ ${salarios[i].toFixed(2)}`);
        encontrouFiltro = true;
    }
}

if (!encontrouFiltro) {
    console.log("Nenhuma funcionária atende aos critérios (Feminino e Salário > R$ 5.000).");
}