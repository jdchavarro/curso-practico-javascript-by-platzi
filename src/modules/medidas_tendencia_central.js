const messages = document.getElementById("messages");
const median = document.getElementById("median");
const mean = document.getElementById("mean");
const mode = document.getElementById("mode");
const mtcNumbers = document.getElementById("mtcNumbers");

const btnCalcMTC = document.getElementById("btnCalcMTC");
let numberList = [];

btnCalcMTC.addEventListener("click", function(){
    numberList = mtcNumbers.value.split(" ").map(n => parseInt(n));
    mode.innerHTML = calcularModa(numberList);
    median.innerHTML = calcularMediana(numberList);
    mean.innerHTML = calcularMediaAritmetica(numberList);
    messages.classList.remove("hidden");
})

function calcularModa(lista) {
    const listaCount = {};
  
    lista.map(function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    });
  
    const listaArray = Object.entries(listaCount).sort(function (valor1, valor2) {
      return valor2[1] - valor1[1];
    });
  
    const moda = listaArray[0][0];
  
    return moda;
  }
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