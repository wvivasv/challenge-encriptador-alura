document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("valorUsuario");
    const encryptButton = document.getElementById("encriptar");
    const decryptButton = document.getElementById("desencriptar");
    const messageElement = document.querySelector(".message");
    const instructionsElement = document.querySelector(".instructions");
    const copyButton = document.getElementById("copiar");

    function encrypt(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    encryptButton.addEventListener("click", () => {
        const userInput = inputField.value.toLowerCase();
        if (userInput) {
            const encryptedMessage = encrypt(userInput);
            messageElement.textContent = encryptedMessage;
            instructionsElement.textContent = "Mensaje encriptado:";
        } else {
            messageElement.textContent = "Ningún mensaje fue encontrado";
            instructionsElement.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        }
    });

    decryptButton.addEventListener("click", () => {
        const userInput = inputField.value.toLowerCase();
        if (userInput) {
            const decryptedMessage = decrypt(userInput);
            messageElement.textContent = decryptedMessage;
            instructionsElement.textContent = "Mensaje desencriptado:";
        } else {
            messageElement.textContent = "Ningún mensaje fue encontrado";
            instructionsElement.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        }
    });

    copyButton.addEventListener("click", () => {
        const text = messageElement.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert("Texto copiado al portapapeles");
        });
    });
});
