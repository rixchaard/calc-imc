function calcularMedia() {
    var numberOne = parseFloat(prompt("Digite o primeiro número:"))
    var NumberTwo = parseFloat(prompt("Digite o segundo número:"))

    var resultMedia = (numberOne + NumberTwo) / 2.

    alert(`O resultado da média entre os números ${numberOne} e ${numberTwo} é ${resultMedia}`)

    console.log("o resultado da media é:" + resultMedia)

    console.log("o tipo da variável no numero 1 é:" + typeof (numberOne))
    console.log("o tipo da variável no numero 2 é:" + typeof (NumberTwo))

    document.getElementById("titulo_resultado_media").style.display = "block"
    document.getElementById("resultado_media").innerHTML = resultMedia
}