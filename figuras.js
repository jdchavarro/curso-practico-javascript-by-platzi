// Codigo del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetoCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetoCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetoTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetoTriangulo + "cm");

const areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

const PI = Math.PI; // 3.1415
console.log("Pi es: " + PI + "cm");

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo = PI * (radioCirculo ** 2);
console.log("La area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();