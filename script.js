function convertir(){

    let cantidad = document.getElementById("cantidad").value;
    let moneda1 = document.getElementById("moneda1").value;
    let moneda2 = document.getElementById("moneda2").value;
    let resultado;

    if (moneda1 ==1 && moneda2 == 2){
        resultado = cantidad * 0.86;
    }
    else if(moneda1 == 1 && moneda2 == 3){
        resultado = cantidad * 3781,00;
    }


    else if (moneda1 == 2 && moneda2 == 1){
        resultado = cantidad * 1.16;
    }
    else if(moneda1 == 2 && moneda2 == 3){
        resultado = cantidad * 4,396.55;
    }

    else if (moneda1 == 3 && moneda2 == 1){
        resultado = cantidad * 0.00027;
    }
    else if(moneda1 == 3 && moneda2 == 2){
        resultado = cantidad * 0.00023;    }

    else{
        resultado = cantidad;
    }

    document.getElementById("resultado").innerHTML="$"+resultado;

}