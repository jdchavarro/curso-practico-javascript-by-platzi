// Codigo del Cuadrado
const perimetoCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado ** 2;

// Codigo del Triangulo
const perimetoTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (altura, base) => base * altura / 2;

// Triangulo isosceles
const dosPrimerosIguales = (a, b, c) => (a == b) && (a != c);
const esIsosceles = (lado1, lado2, lado3) =>{
    return dosPrimerosIguales(lado1, lado2, lado3) ||
           dosPrimerosIguales(lado1, lado3, lado2) ||
           dosPrimerosIguales(lado2, lado3, lado1);
}
const calcularBaseHipotenusa = (lado1, lado2, lado3) => {
    if (lado1 == lado2) {
        return [lado3, lado1];
    }
    if (lado1 == lado3) {
        return [lado2, lado1];
    }
    if (lado2 == lado3) {
        return [lado1, lado2];
    }
}
const alturaTrianguloIsosceles = (lado1, lado2, lado3) => {
    //Comprobar que sea isosceles
    if (esIsosceles(lado1, lado2, lado3)) {
        let [base, hipotenusa] = calcularBaseHipotenusa(lado1, lado2, lado3);
        let altura = Math.sqrt((hipotenusa**2) - ((base / 2)**2));
        return altura;
    }
};

// Codigo del Circulo
const perimetroCirculo = (radio) => 2 * Math.PI * radio;
const areaCirculo = (radio) => Math.PI * (radio ** 2);

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetoCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("lado1Triangulo").value);
    const lado2 = Number(document.getElementById("lado2Triangulo").value);
    const base = Number(document.getElementById("baseTriangulo").value);

    const perimetro = perimetoTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);

    const area = areaTriangulo(altura, base);
    alert(area);
}

function calcularAlturaIsosceles() {
    const lado1 = Number(document.getElementById("lado1Isosceles").value);
    const lado2 = Number(document.getElementById("lado2Isosceles").value);
    const lado3 = Number(document.getElementById("lado3Isosceles").value);

    const altura = alturaTrianguloIsosceles(lado1, lado2, lado3);
    alert(altura);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}