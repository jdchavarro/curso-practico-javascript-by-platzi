// Helpers
function esPar(numerito) {
    return numerito % 2 === 0;
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((acc = 0, elemento) => acc + elemento);
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

// Calculadora de mediana
function medianaSalarios(lista) {
    let mediana;
    const mitadLista = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const elemento1 = lista[mitadLista];
      const elemento2 = lista[mitadLista - 1];
  
      mediana = calcularMediaAritmetica([elemento1, elemento2]);
    } else {
      mediana = lista[mitadLista];
    }
  
    return mediana;
  }


// Mediana General
const salariosCol = colombia.map(function (persona) {
    return persona.salary;
  });
const salariosColSorted = salariosCol.sort((a, b) => a - b);
const medianaGeneralCol = medianaSalarios(salariosCol);

// Mediana del top10%
const spliceStart = (salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);



console.log({
    medianaGeneralCol,
    medianaTop10Col,
});