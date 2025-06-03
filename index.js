const peso = Number(prompt("Digite seu peso (kg):"));
const altura = Number(prompt("Digite sua altura (m):"));

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);


if(imc < 0){
  console.log("Dados invalidos")
}
if (imc < 18.5) {
  classificacao = "Abaixo do peso";
  alert("Classificação: Abaixo do peso");
} else if (imc <= 24.9) {
  classificacao = "Peso normal";
  alert("Classificação: Peso normal");
} else if (imc <= 29.9) {
  classificacao = "Sobrepeso";
  alert("Classificação: Sobrepeso");
} else if (imc <= 34.9) {
  classificacao = "Obesidade I";
  alert("Classificação: Obesidade I");
} else if (imc <= 39.9) {
  classificacao = "Obesidade II";
  alert("Classificação: Obesidade II");
} else {
  classificacao = "Obesidade III (obesidade III)";
  alert("Classificação: Obesidade III");
}

console.log(`Classificação: ${classificacao}`);
