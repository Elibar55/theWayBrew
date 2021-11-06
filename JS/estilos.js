const URLGET   = "json/estilos.json"

    $.get(URLGET, (respuesta, estado) => {
        console.log(respuesta);
        console.log(estado);
        if (estado === "success") {
            let cervezas = respuesta;
            for (const cerveza of cervezas) {
                $("#estilosCervezas").append(`
                <li class="col">
                <div class="card" style="width: 15rem;">
                    <img src="${cerveza.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-title">${cerveza.nombre}</p>
                        <p class="card-text">Esta cerveza tiene una graduacion alcoholica de ${cerveza.alcohol}%, su indice de amargor es de ${cerveza.ibus} ibus y su color es ${cerveza.color}</p>
                    </div>
                </div>
               </li>
               `)
               
            }    
        }
    })
;
