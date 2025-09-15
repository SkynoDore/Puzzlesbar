<?php 
require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

$apiKey = $_ENV['API_KEY'];
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Author" CONTENT="Gabriel Vich">
    <meta name="description" content="Bar y sala de entretenimiento, diversion sin limites">
    <meta name="category" content="Bar">
    <link rel="stylesheet" href="../Style/css1.css">
    <link rel="icon" type="image/jpg" href="../photos/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Open+Sans&display=swap"
        rel="stylesheet">
    <!-- importo la api de maps con mi llave propia-->
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $apiKey; ?>"></script>
    <title>Contacta con Puzzles bar</title>
</head>
<body onload="cargarmapa()">
    <header>
        <nav>
            <ul>
                <li><img src="../photos/logo.png" alt="logo"></li>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="productos.html">Cócteles</a></li>
                <li><a href="presupuestos.html">Reserva</a></li>
                <li><a href="eventos.html">Noticias</a></li>
                <li><a href="contacto.php" id="selected">Encuéntranos</a></li>
            </ul>
        </nav>
    </header>
    <main>
            <!-- aqui llamo la funcion para cargar mapa-->
            <h1>Nos encontrarás aqui</h1>
            
            <div style="display: flex; width: 95%; margin: auto; flex-wrap: wrap;">
                <div id="fotos" style="width: 450px; height: 455px"></div>
                <div id="mapa" style="width: 450px; height: 455px"></div>
                <div id="ruta" style="position: relative; float: left; overflow: auto;"></div>
            </div>
            <h2>Quiere direcciones?</h2>
            <input id="partida" type="text" value="">
            <input type="button" value="Geolocalizar" onclick="calcularRuta()">
            <p>C. de Alonso Cano, 44, 46, 28003 Madrid</p>
            <br>
            <p>Para cualquier incoveniente con la pagina, puedes contactar al siguiente correo <a
                    href="#">puzzles.bar@awesomemail.com</a></p>
            <p>O llama al siguiente numero: 630 838383</p>
    </main>
    <footer>
        <h3>Redes sociales</h3>
        <ul>
            <li><a href="contacto.html"><img src="../photos/ig.png" alt="Logo de Instagram" title="Instagram"></a></li>
            <li><a href="contacto.html"><img src="../photos/fb.png" title="Facebook" alt="Logo de Facebook"></a></li>
            <li><a href="contacto.html"><img src="../photos/x.png" title="Twitter" alt="Logo de Twitter"></a></li>
        </ul>
        <br>
        <p>Calle de Alonso Cano, 44, 46, 28003 Madrid.</p>
        <p id="copyright">©2023 Puzzles inc. Todos los derechos reservados</p>
    </footer>
    <!--se carga el script-->
    <script src="../scripts/gmaps.js"></script>
</body>
</html>