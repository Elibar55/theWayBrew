const pedidoLocalStorage = [];

const contenedorPedido = document.getElementById("pedido");
const totalPagar = document.getElementById("total-pagar");

const eliminarProducto = (producto) => {
  $(`#producto-pedido-${producto.id}`).remove();

  const index = pedidoLocalStorage.findIndex(productoLocal => parseInt(producto.id) === parseInt(productoLocal.id));

  pedidoLocalStorage.splice(index, 1);
  localStorage.setItem("pedido", JSON.stringify(pedidoLocalStorage));
  sumarPedido();
}

const convertirPrecioANumero = (precio) => parseInt(precio.replaceAll(",", ""));

const numeroAComas = (total) => {
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const sumarPedido = () => {
  let totalPedido = 0;
  for (const producto of pedidoLocalStorage) {
    totalPedido = totalPedido + (producto.precio * producto.cantidad);
  }
  $("#total-pagar").html(`$${numeroAComas(totalPedido)}`);
  localStorage.setItem("totalAPagar", totalPedido);
}

$(".boton-pedido").on("click", function () {
  $("#contenedor-general-pedido").toggleClass("on");
});

const insertarProductosAPedido = (producto) => {
  if ($(`#producto-pedido-${producto.id}`).length === 0) {
    if (!$("#contenedor-general-pedido").hasClass("on")) {
      $(".boton-pedido").trigger("click");
    }
    $("#pedido").append(`
        <div class="producto-pedido" id="producto-pedido-${producto.id}">
          <img src="${producto.imagen}">
          <div class="descripcion-producto">
            <p>  Producto: ${producto.nombre}</p>
            <b> $ ${producto.precio}</b>
            <b> Cantidad: <span id="producto-cantidad-${producto.id}">${producto.cantidad}</span></b>
          </div>
        </div>
      `)

    $(`#producto-pedido-${producto.id}`).append(`
        <button class="boton-eliminar" id="boton-${producto.id}">Eliminar</button>
      `);

    $(`#boton-${producto.id}`).on("click", function () {
      eliminarProducto(producto);
    });

    pedidoLocalStorage.push(producto);
  } else {
    const nuevaCantidad = parseInt($(`#producto-cantidad-${producto.id}`).html()) + 1;
    const i = pedidoLocalStorage.findIndex(p => parseInt(p.id) === parseInt(producto.id))
    pedidoLocalStorage[i] = { ...pedidoLocalStorage[i], cantidad: nuevaCantidad };
    $(`#producto-cantidad-${producto.id}`).html(nuevaCantidad)
  }
  localStorage.setItem("pedido", JSON.stringify(pedidoLocalStorage));
  sumarPedido();
}  