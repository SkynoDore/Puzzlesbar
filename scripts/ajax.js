function cargar() {
    //creacion del objeto objHttp para crear el canal de comunicacion asincrono con el servidor
    var objHttp = null;
    if (window.XMLHttpRequest) {
        objHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        objHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    console.log("ajax inicializado")
     // con el metodo open se abre el canal, GET es el tipo de peticion, la segunda propiedad es la URL de la peticion, y true es para activar la asincronia
    objHttp.open("GET", "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/deportes/portada", true);
    console.log("solicitud creada");
    objHttp.onreadystatechange = function () {
        /* esto al detectar un cambio en el estado de la peticion, realiza una funcion recordando que: 
            0 No inicializado.
            1 Cargando (inicio).
            2 Cargando (ya tenemos cabecera y estatus.)
            3 Interactivo (tenemos datos parciales).
            4 Completado.*/ 
        try {
            if (objHttp.readyState == 4) {
                console.log("contenido cargado")
                //ya cargado, creo unas variables para que sea mas facil generar las cadenas
                var documento = objHttp.responseXML;
                var channel = documento.getElementsByTagName("channel")[0]; // Obtener el nodo channel
                var items = channel.getElementsByTagName("item"); // Obtener los elementos item dentro de channel
                var cadena = "";
                //bucle para convertir generar el texto de la cadena
                for (var i = 0; i < Math.min(items.length, 4); i++) { // Iterar sobre los primeros 3 items
                    var item = items[i];
                    var titulo = item.getElementsByTagName("title")[0].textContent;
                    var descripcion = item.getElementsByTagName("description")[0].textContent;
                    var enlace = item.getElementsByTagName("link")[0].textContent;
                // se procede a sumarse todas las cadenas
                    cadena += "<h3><a href='" + enlace + "'>" + titulo + "</a></h3><br/>";
                    cadena += "<b>" + descripcion + "</b><br/>";
                }
                
 //finalmente al detectar que la peticion se ha completado, se procede a modificar el DOM con los datos de la respuesta del servidor.
                document.getElementById("noticias").innerHTML = cadena;
                console.log("contenido agregado al sidebar");

            }
        } catch (error) {
            console.error("Error al procesar la respuesta XML:", error);
            //esto nos indica en consola si ha sucedido un error
        }
    }
    objHttp.send();
}
