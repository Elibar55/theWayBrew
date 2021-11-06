const totalAPagar = JSON.parse(localStorage.getItem("totalAPagar"));
const prodocutoLocalStorage = JSON.parse(localStorage.getItem("pedido"));
const pedido = JSON.parse(localStorage.getItem("pedido"));
console.log(pedido)
const pagar = document.getElementById("pagar");
const subtotal = document.getElementById("subtotal");
const iva = document.getElementById("iva");
const botonPago = document.getElementById("boton-pagar");



class Factura {
    constructor (subtotal, cantidadProductos) {
        this.subtotal = subtotal;
        this.iva = subtotal * 0.21;
    }
    total() {
        return this.subtotal + this.iva;
    }
  }

const facturaUsuario = new Factura(totalAPagar, prodocutoLocalStorage.length);

subtotal.innerHTML = `Subtotal: <strong>$${numeroAComas(facturaUsuario.subtotal)}</strong>`;
iva.innerHTML = `IVA: <strong>$${numeroAComas(facturaUsuario.iva)}</strong>`;
pagar.innerHTML = "$" + numeroAComas(facturaUsuario.total());

botonPago.addEventListener("click", (e) => {
    pago()
})
async function pago (){
    const pagoMap = pedido.map(Element => {
        let nuevoElemento = {
            title: Element.nombre,
            description: Element.color,
            picture_url: Element.imagen,
            category_id: Element.id,
            quantity: Number(Element.cantidad),
            currency_id: "ARG",
            unit_price: Number(Element.precio)
        }
        return nuevoElemento
    })
        console.log(pagoMap)
    let response = await fetch("https://api.mercadopago.com/checkout/preferences",
    {
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006"
        },
        body: JSON.stringify({
            items: pagoMap,
        })
    })

    const data = await response.json()
    window.open(data.init_point, "_blank")
}

/*
botonPago.addEventListener("click", (e) => {
    pago()
})

function pago() {
    const pedidoMap = pedido.map(Element => {
        let nuevoElemento = {
            title: Element.nombre,
            description: Element.color,
            picture_url: Element.imagen,
            category_id: Element.id,
            quantity: Element.cantidad,
            currency_id: "ARG",
            unit_price: Element.precio
            }
        return nuevoElemento  
          
    })
    console.log(pedidoMap)
    $.ajax({
        method : "POST",
        url : "https://api.mercadopago.com/checkout/preferences",
        headers: {
            Authorization: "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006"
        },  
        data: JSON.stringify({
            items: pedidoMap
        }),
        success: function (response, status){
            const data = response
            console.log(data)
        }

    })
}
*/

