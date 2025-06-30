document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let titulo = document.getElementById("titulo").value;
    let imagen = document.getElementById("imagen").value;
    let descripcion = document.getElementById("descripcion").value;

    let tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.innerHTML = `
        <fieldset class="contenedor_tarjetas">
            <h3>${titulo}</h3>
            <img src="${imagen}">
            <p>${descripcion}</p>
            <button onclick="eliminarTarjeta(this)">Eliminar</button>
        </fieldset>
    `;

    document.getElementById("contenedor-tarjetas").appendChild(tarjeta);

    document.getElementById("formulario").reset();
});

function eliminarTarjeta(boton) {
    if (confirm("¿Seguro que quieres eliminar esta tarjeta?")) {
        boton.parentElement.remove();
    }
}