function compilator(string) {
  let result = [];
  let numero = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      numero += 1;
    }
    if (string[i] === "@") {
      numero -= 1;
    }
    if (string[i] === "*") {
      numero *= numero;
    }
    if (string[i] === "&") {
      result.push(numero);
    }
  }
  console.log(result.join(""));
}

compilator(
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
);
