document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("#tela");

    function inputDisplay(value) {
        if (value === "C") {
            display.value = ""; // Limpa a tela
        } else if (value === "=") {
            try {
                display.value = eval(display.value); // Calcula a expressão
            } catch {
                display.value = "Erro"; // Exibe "Erro" se a expressão for inválida
            }
        } else {
            display.value += value; // Adiciona o valor à tela
        }
    }

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            inputDisplay(this.textContent); // Passa o texto do botão para a função
        });
    });
});
