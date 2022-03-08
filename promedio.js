function calcularMediaAritmetica(lista) {
//   let sumaLista = 0;

//   for (let i = 0; i < lista.length; i++) {
//     sumaLista += lista[i];
//   }

const sumaLista = lista.reduce((acc=0, elemento) => acc + elemento);

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediaGeometrica(lista) {
  const multiplicacionLista = lista.reduce((acc=0, elemento) => acc * elemento);

  const promedioLista = Math.pow(multiplicacionLista, 1/lista.length);
  return promedioLista;
}