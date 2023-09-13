document.getElementById("divsoma").addEventListener("click", function () {
    let num1 = parseInt(window.prompt("Digite um número"));
    let num2 = parseInt(window.prompt("Digite outro número"));
    document.getElementById("resultado").innerHTML = `A soma entre <span class="nums">${num1}</span> e <span class="nums">${num2}</span> é igual a <strong>${num1 + num2}</strong>!`;
});