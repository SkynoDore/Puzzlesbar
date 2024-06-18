$(document).ready(function() {
    // Crear un array de temporizadores
    var temporizadores = [];

    // Manejar el evento mouseover y mouseleave para cada caja
    $(".cajas").mouseenter(function(){
        // Obtener el índice de la caja actual
        var index = $(this).index();

        // Detener el temporizador correspondiente a la caja actual, si existe
        clearTimeout(temporizadores[index]);

        // Animar la caja actual..
        $(this).find("img").animate({ height: "60px" }, 100);
        $(this).find("div").animate({ height: "460px" }, 100);
        //la animación consiste en hacer la imagen mas pequeña y el texto mas grande y se ajustaran automaticamente porque la caja es tipo flex.
    });

    $(".cajas").mouseleave(function(){
        // Obtener el índice de la caja actual
        var index = $(this).index();
        
        // Obtener la caja actual
        var cajaActual = $(this);

        // Configurar un temporizador para la caja actual
        temporizadores[index] = setTimeout(function() {
            // Animar la caja actual para volver a su estado original
            cajaActual.find("img").animate({ height: "520px" }, 100);
            cajaActual.find("div").animate({ height: "0px" }, 100);
        }, 2000); // Retraso de 2000 ms (2 segundos)
    });
    
});

