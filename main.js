// ==========PRIMER PROBLEMA ==============

// PEDIR EL DINERO TOTAL QUE TIENE
var calcular = () =>{
    let dinero = document.getElementById("entrada").value;

// MOSTAR EL HELADO MAS CARO QUE PUEDE COMPRAR
    if (dinero < 0.6) {
        document.getElementById("caja1").innerHTML=("No te alcanza para ningun helado");
        var costoDelHelado = 0;
    }
    else if (dinero >= 0.6 && dinero < 1) {
        document.getElementById("caja1").innerHTML=("Palito de helado de agua");
        var costoDelHelado = 0.6;
    }
    else if (dinero >= 1 && dinero < 1.6) {
        document.getElementById("caja1").innerHTML=("Palito de helado de crema");
        var costoDelHelado = 1;
    }
    else if (dinero >= 1.6 && dinero < 1.7) {
        document.getElementById("caja1").innerHTML=("Bombon helado de marca heladix");
        var costoDelHelado = 1.6;
    }
    else if (dinero >= 1.7 && dinero < 1.8) {
        document.getElementById("caja1").innerHTML=("Bombon helado de marca heladovich");
        var costoDelHelado = 1.7;
    }
    else if (dinero >= 1.8 && dinero < 2.9) {
        document.getElementById("caja1").innerHTML=("Bombon helado de marca helardo");
        var costoDelHelado = 1.8;
    }
    else if (dinero >= 2.9) {
        document.getElementById("caja1").innerHTML=("Helado con confites o un pote de 1/4 KG");
        var costoDelHelado = 2.9;
    }
    else{
        document.getElementById("caja1").innerHTML="No se ingreso ningun valor";
    }

// CALCULAR EL VUELTO
    if (dinero > 0)
    {
        var vuelto = dinero - costoDelHelado;
        document.getElementById("caja2").innerHTML="$" + vuelto.toFixed(2);
    }

    else{
        document.getElementById("caja2").innerHTML="$ " + 0
    }

    //PARA MOSTRAR EL SIGNO DE DOLARES "$" EN EL PRIMER RECUADRO AZUL===
    document.getElementById('entrada').classList.add('invisible');
    document.getElementById('valueInput').classList.remove('invisible');

    document.getElementById("valueInput").innerHTML ="$" + dinero;
    // ====================
}
