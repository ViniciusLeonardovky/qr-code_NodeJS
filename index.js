const QRCode = require("qrcode");
const path = require("path");
const readline = require("readline");
const crypto = require("crypto");

// Funcao para poder escrever e ler no terminal
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funcao que ira retornar o QRcode
input.question("Digite alguma coisa: ", response => {
  const filename = "QRCode-" + crypto.randomBytes(5).toString("hex"); // Definindo um nome

  // Funcao que ira montar o QRcode e enviar para o diretorio informado
  QRCode.toFile(
    path.resolve(__dirname, "images", filename) + ".png",
    `${response}`,
    {
      color: {
        dark: "#000", // dots
        light: "#fff" // background
      }
    },
    err => {
      if (err) throw err; // Verificando caso ocorra um erro
      console.log("QR code gerado!"); // Caso de tudo certo, vai ser retornado essa mensagem
    }
  );
  input.close();
});
