var mapa;
var mostrar_direcciones;
var servicios_rutas = new google.maps.DirectionsService();

// Función para cargar el mapa y configurar los elementos relacionados
function cargarmapa() {
    // Crear el objeto para mostrar las direcciones en el mapa
    mostrar_direcciones = new google.maps.DirectionsRenderer();
    
    // Coordenadas del punto en el mapa
    var punto = new google.maps.LatLng(40.44132135975042, -3.697454529931839);

    // Opciones para configurar el mapa
    var opciones = {
        zoom: 16,
        center: punto,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Crear el mapa con las opciones especificadas
    mapa = new google.maps.Map(document.getElementById("mapa"), opciones);

    // Configurar el objeto para mostrar las direcciones en el mapa
    mostrar_direcciones.setMap(mapa);
    mostrar_direcciones.setPanel(document.getElementById("ruta"));

    // Opciones para configurar la vista de street view
    var opciones_fotos = {
        position: punto,
        pov: {
            heading: 34,
            pitch: 0,
            zoom: 1
        }
    };

    // Crear el objeto para mostrar street view y configurarlo
    var fotos = new google.maps.StreetViewPanorama(document.getElementById("fotos"), opciones_fotos);
    mapa.setStreetView(fotos);

    // Crear un marcador en el mapa
    var marca = new google.maps.Marker({
        position: punto,
        map: mapa
    });

    // Crear una ventana de información para el marcador
    var caja = new google.maps.InfoWindow({
        content: 'Empresa: <b>MasterD Formación online</b><br>C. de Alonso Cano, 44, 46, Chamberí, 28003 Madrid<br><a href="https://www.google.com/maps?ll=40.44138,-3.697382&z=18&t=m&hl=es&gl=US&mapclient=apiv3&cid=15200516969602322366">Ver en Google Maps</a>'
    });

    // Evento al hacer clic en el marcador para mostrar la ventana de información
    google.maps.event.addListener(marca, 'click', function() {
        caja.open(mapa, marca);
    });
}

// Función para calcular y mostrar la ruta desde la dirección especificada
function calcularRuta() {
    // Obtener la dirección de partida desde el input
    var partida = document.getElementById("partida").value;
    
    // Coordenadas del punto en el mapa
    var punto = new google.maps.LatLng(40.44132135975042, -3.697454529931839);
    
    // Opciones para calcular la ruta
    var opciones = {
        origin: partida,
        destination: punto,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    // Calcular la ruta usando el servicio de direcciones
    servicios_rutas.route(opciones, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Mostrar la ruta en el mapa
            mostrar_direcciones.setDirections(response);
        } else {
            // Mostrar un mensaje de error si no se pudo calcular la ruta
            alert("No se pudo encontrar una ruta: " + status);
        }
    });
}
