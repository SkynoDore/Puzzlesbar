function presupuesto() {
    //creacion de variables
    var producto = document.getElementById("producto").value;
    var personas = parseInt(document.getElementById("personas").value);
    var copas = document.getElementById("copas").checked ? 5 * personas : 0;
    var menu = document.getElementById("menu").checked ? 30 * personas : 0;
    var deco = document.getElementById("deco").checked ? 80 : 0;
    var total = 0;

    //se calcula el precio a pagar dependiendo de las opciones elegidas
    switch (producto) {
        case "mesa":
            total = 0 + copas + menu + deco;
            break;
        case "sala":
            //condicion que al no cumplirse, volvera a enfocar a la opción de la mesa
            if (personas < 8) {
                alert("Para reservar una sala se requieren al menos 8 personas.");
                document.getElementById("producto").value = "mesa";
                return;
            }
            total = 60 + copas + menu + deco;
            break;
        case "barEntero":
            if (personas < 20) {
                alert("Para reservar todo el restaurante se requieren al menos 20 personas.");
                document.getElementById("producto").value = "mesa";
                return;
            }
            total = 300 + copas + menu + deco;
            break;
    }
    // se obtienen la fecha dada y la fecha actual y se procedera a comparar
    var fechaSeleccionada = new Date(document.getElementById("fecha").value);
    var fechaActual = new Date();
    var diferenciaDias = Math.ceil((fechaSeleccionada - fechaActual) / (1000 * 60 * 60 * 24)); // se calculan los dias de esta forma porque estas vienen dadas en milisegundos.

    if (diferenciaDias >= 7) {
        // Aplicar descuento del 20%
        total *= 0.8;
    }
    //se muestra el total con dos decimales
    document.getElementById("total").value = total.toFixed(2);

}

//se procedera a validar el formulario al darle "enviar" 
document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Eliminar el estilo de todos los campos faltantes
        document.querySelectorAll('.campos-faltantes').forEach(function (campo) {
            campo.classList.remove("campos-faltantes");})

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var personas = parseInt(document.getElementById("personas").value);
    var privacidad = document.getElementById("privacidad").checked;
    var fecha = document.getElementById("fecha").value; // Obtener el valor de la fecha

    // Expresión regular para validar que solo contenga letras
    var letrasRegex = /^[A-Za-z]+$/;
    var phonePattern = /^[0-9]{9}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Variable para almacenar los campos faltantes
    var camposFaltantes = [];
 
    // Validar longitud y formato de nombre y apellidos
    if (nombre === "") {
        camposFaltantes.push(document.getElementById("nombre"));
    } else if (!nombre.match(letrasRegex) || nombre.length > 15) {
        alert("El nombre solo puede contener letras y tener una longitud máxima de 15 caracteres.");
        return;
    }
    if (apellido === "") {
        camposFaltantes.push(document.getElementById("apellido"));
    } else if (!apellido.match(letrasRegex) || apellido.length > 40) {
        alert("Los apellidos solo pueden contener letras y tener una longitud máxima de 40 caracteres.");
        return;
    }
    if (phone === "") {
        camposFaltantes.push(document.getElementById("phone"));
    } else if (!phonePattern.test(phone)) {
        alert("El número de teléfono debe tener 9 dígitos sin espacios ni caracteres especiales.");
        return;
    }
    if (email === "") {
        camposFaltantes.push(document.getElementById("email"));
    } else if (!emailPattern.test(email)) {
        alert("El correo electrónico no tiene un formato válido.");
        return;
    }
    if (isNaN(personas)) {
        camposFaltantes.push(document.getElementById("personas"));
    }

    if(camposFaltantes.length > 0){
        alert ("Te falta por rellenar los campos resaltados")
        camposFaltantes.forEach(function (campo) {
            campo.classList.add("campos-faltantes");
        });
        return;
    }
    if (!privacidad) {
        alert("Es necesario aceptar los terminos y condiciones");
        return;
    }
    if (fecha === "") {
        camposFaltantes.push(document.getElementById("fecha")); // Agregar campo de fecha a campos faltantes
    } else {
        // Verificar si la fecha introducida es menor que la fecha actual
        var fechaSeleccionada = new Date(fecha);
        var fechaActual = new Date();
        if (fechaSeleccionada < fechaActual) {
            alert("La fecha seleccionada debe ser igual o posterior a la fecha actual.");
            return;
        }
    }
    
    // Si todas las validaciones pasan, enviar el formulario
    alert("Solicitud enviada, enseguida nos pondremos en contacto. Muchas gracias.");
        // Aplicar estilo CSS a los campos faltantes
});