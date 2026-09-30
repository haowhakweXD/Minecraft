
const botonEmpezar = document.getElementById("botonEmpezar");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

botonEmpezar.onclick = function() {
    inicio.style.display = "none";
    contenido.style.display = "block";
};


function mostrarInfo(tipo) {

    const informacion = document.getElementById("informacion");

    if (tipo === "explorar") {

        informacion.innerHTML =
        "<p>🌎 <strong>EXPLORAR:</strong><br><br>" +
        "Puedes recorrer diferentes biomas, encontrar aldeas, " +
        "cuevas, océanos, montañas y muchos lugares secretos.</p>";

    }

    else if (tipo === "construir") {

        informacion.innerHTML =
        "<p>🏠 <strong>CONSTRUIR:</strong><br><br>" +
        "Puedes utilizar los bloques que encuentres para construir " +
        "casas, castillos, ciudades, granjas y prácticamente " +
        "cualquier estructura que puedas imaginar.</p>";

    }

    else if (tipo === "sobrevivir") {

        informacion.innerHTML =
        "<p>🧟 <strong>SOBREVIVIR:</strong><br><br>" +
        "Cuando llega la noche aparecen criaturas hostiles. " +
        "Tendrás que conseguir recursos, fabricar herramientas " +
        "y protegerte para sobrevivir.</p>";

    }

    else if (tipo === "crear") {

        informacion.innerHTML =
        "<p>⚒️ <strong>CREAR:</strong><br><br>" +
        "Puedes fabricar herramientas, armas, armaduras, " +
        "objetos y mecanismos utilizando los recursos " +
        "que encuentres durante tu aventura.</p>";

    }
}

