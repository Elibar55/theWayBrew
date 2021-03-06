const productos = [
    {
      id: 1,
      nombre: 'IPA',
      imagen: 'media/ipa.jpg',
      color: 'Amarillo',
      ibus: '80',
      alcohol: '7',
      precio: '180',
      cantidad: '1'
    },
    {
        id: 2,
        nombre: 'APA',
        imagen: 'media/apa.jpg',
        color: 'Amarillo',
        ibus: '45',
        alcohol: '4',
        precio: '160',
        cantidad: '1'
    },
    {
        id: 3,
        nombre: 'NEIPA',
        imagen: 'media/neipa.jpg',
        color: 'Mostaza',
        ibus: '86',
        alcohol: '9',
        precio: '180',
        cantidad: '1'
    },
    {
        id: 4,
        nombre: 'STOUT',
        imagen: 'media/stout.jpg',
        color: 'Negro',
        ibus: '35',
        alcohol: '6',
        precio: '200',
        cantidad: '1'
    }];
    
    localStorage.setItem("baseDeDatos", JSON.stringify(productos));
    console.log(localStorage.getItem("baseDeDatos"));

    jQuery(() => {
      const prodocutoLocalStorage = JSON.parse(localStorage.getItem("pedido"));

      const insertarProductos = () => {
        for (const producto of productos) {
          $('#listado').append(`
        <li class="producto" id="${producto.id}">
          <div class="imagen-producto">
            <img src="${producto.imagen}" alt="">
          </div>
          <p class="nombre">${producto.nombre}</p>
          <p class="precio">$${producto.precio}</p>
        </li>`);
    
          $(`#${producto.id}`).on("click", function () {
            insertarProductosAPedido(producto);
          });
        }
      }
    
      insertarProductos();
    
      if (prodocutoLocalStorage !== null) {
        for (const producto of prodocutoLocalStorage) {
          insertarProductosAPedido(producto);
        }
      }
    });
