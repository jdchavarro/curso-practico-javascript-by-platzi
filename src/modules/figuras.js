const messages = document.getElementById("messages");
const area = document.getElementById("area");
const perimeter = document.getElementById("perimeter");

/* Mostramos los formularios dependiendo de la forma solicitada */
const btnSquare = document.getElementById("btnSquare");
const btnCircle = document.getElementById("btnCircle");
const btnTriangle = document.getElementById("btnTriangle");
const formSquare = document.getElementById("form-square");
const formCircle = document.getElementById("form-circle");
const formTriangle = document.getElementById("form-triangle");

btnSquare.addEventListener("click", function(){
    formSquare.classList.remove("hidden");
    formCircle.classList.add("hidden");
    formTriangle.classList.add("hidden");
    messages.classList.add("hidden");
});

btnCircle.addEventListener("click", function(){
    formSquare.classList.add("hidden");
    formCircle.classList.remove("hidden");
    formTriangle.classList.add("hidden");
    messages.classList.add("hidden");
});

btnTriangle.addEventListener("click", function(){
    formSquare.classList.add("hidden");
    formCircle.classList.add("hidden");
    formTriangle.classList.remove("hidden");
    messages.classList.add("hidden");
});

// Codigo del Cuadrado
const btnCalcSquare = document.getElementById("btnCalcSquare");
const squareSide = document.getElementById("squareSide");

const perimeterSquare = (side) => side * 4;
const areaSquare = (side) => side ** 2;

btnCalcSquare.addEventListener("click", function(){
    area.innerHTML = areaSquare(parseInt(squareSide.value));
    perimeter.innerHTML = perimeterSquare(parseInt(squareSide.value));
    messages.classList.remove("hidden");
});

// Codigo del Circulo
const btnCalcCircle = document.getElementById("btnCalcCircle");
const circleRadio = document.getElementById("circleRadio");

const perimetroCircle = (radio) => (2 * Math.PI * radio).toFixed(2);
const areaCircle = (radio) => (Math.PI * (radio ** 2)).toFixed(2);

btnCalcCircle.addEventListener("click", function(){
    area.innerHTML = areaCircle(parseInt(circleRadio.value));
    perimeter.innerHTML = perimetroCircle(parseInt(circleRadio.value));
    messages.classList.remove("hidden");
});

// Codigo del Triangulo
const btnCalcTriangle = document.getElementById("btnCalcTriangle");
const triangleSideOne = document.getElementById("triangleSideOne");
const triangleSideTwo = document.getElementById("triangleSideTwo");
const triangleSideThree = document.getElementById("triangleSideThree");

const perimeterTriangle = (side1, side2, side3) => side1+side2+side3;
const areaTriangle = (a, b, c) => {
    let p = a+b+c;
    let s = p/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
};

btnCalcTriangle.addEventListener("click", function(){
    perimeter.innerHTML = perimeterTriangle(
        parseInt(triangleSideOne.value),
        parseInt(triangleSideTwo.value),
        parseInt(triangleSideThree.value));
    area.innerHTML = areaTriangle(
        parseInt(triangleSideOne.value),
        parseInt(triangleSideTwo.value),
        parseInt(triangleSideThree.value));
    messages.classList.remove("hidden");
});
