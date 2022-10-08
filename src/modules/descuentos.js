let btnCalcular = document.getElementById("btnCalcular");
const cupones = new Map([
  ["promo15", 15],
  ["promo20", 20],
  ["promo50", 50],
  ["promo80", 80],
]);

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function calcularPrecionConCupon(precio, cupon) {
  if(cupones.has(cupon)) {
      return calcularPrecioConDescuento(precio, cupones.get(cupon));
  } else {
      return precio + ", cupon invalido";
  }
}

btnCalcular.addEventListener("click", onClickButtonPriceDiscount);

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  const cuponODescuento = document.getElementById("CuponODescuento").value;

  const precioConDescuento = (cuponODescuento == "cupon") ? calcularPrecionConCupon(priceValue, discountValue) : calcularPrecioConDescuento(priceValue, discountValue);
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}