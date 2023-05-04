function calcularIMC() {
    alert("Olá, você abriu a calculadora de IMC!")

    var peso = Number(prompt("Qual é o seu peso?"))
    alert(`O peso informado é de ${peso}kg`)

    var altura = Number(prompt("Qual é sua altura?"))
    alert(`A altura informado é de ${altura}m.`)

    var imc = peso / (altura **2)
    imc = imc.toFixed(2)

    alert(`O resultado do IMC entre o peso ${peso}kg e a altura ${altura}m é de ${imc}`)

    document.getElementById("titulo_resultado_imc").style.display = "block"
    document.getElementById("resultado_imc").innerHTML = imc
}