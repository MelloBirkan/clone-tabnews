function somar(argumento1, argumento2) {
  if (typeof argumento1 != "number" || typeof argumento2 != "number" ) {
    return "Erro";
  } else {
    return argumento1 + argumento2
  }
}

function dividir(argumento1, argumento2) {
  if (typeof argumento1 != "number" || typeof argumento2 != "number" ) {
    return "Erro";
  } else {
    return argumento1 / argumento2
  }
}

exports.somar = somar;
exports.dividir = dividir;