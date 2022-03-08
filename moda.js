const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

function calcularModa(lista) {
  const listaCount = {};

  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  console.log(listaCount);

  const listaArray = Object.entries(listaCount).sort(function (valor1, valor2) {
    return valor2[1] - valor1[1];
  });

  const moda = listaArray[0][0];

  return moda;
}
