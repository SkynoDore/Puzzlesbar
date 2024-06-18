
function moverDer(){
    var caja1 = document.getElementById('caja1').innerHTML;
    
    document.getElementById('caja5').innerHTML = document.getElementById('caja1').innerHTML;
    document.getElementById('caja1').innerHTML = document.getElementById('caja2').innerHTML;
    document.getElementById('caja2').innerHTML = document.getElementById('caja3').innerHTML;
    document.getElementById('caja3').innerHTML = document.getElementById('caja4').innerHTML;
    document.getElementById('caja4').innerHTML = document.getElementById('caja5').innerHTML;
    document.getElementById('caja5').innerHTML = caja1;
}

function moverIzq(){
    var caja5 = document.getElementById('caja5').innerHTML;
    

    document.getElementById('caja5').innerHTML = document.getElementById('caja4').innerHTML;
    document.getElementById('caja4').innerHTML = document.getElementById('caja3').innerHTML;
    document.getElementById('caja3').innerHTML = document.getElementById('caja2').innerHTML;
    document.getElementById('caja2').innerHTML = document.getElementById('caja1').innerHTML;
    document.getElementById('caja1').innerHTML = caja5;
}