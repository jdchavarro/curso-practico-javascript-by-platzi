function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((acc = 0, elemento) => acc + elemento);

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediana(lista) {
  lista = lista.sort((num1, num2) => num1 - num2);
  let mediana;
  const mitadLista = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }

  return mediana;
}
