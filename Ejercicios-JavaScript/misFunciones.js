/**
 * Conversion de unidades, metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los input de metros, pulgadas, pies o yardas.
 * @param {number} valor - El valor de lo inputs de metros, pulgadas, pies o yardas.
 * @return
 */
function cambiarUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";

    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.09361*valor;
    }else if(id=="pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.0833334*valor;
        document.lasUnidades.unid_yarda.value = 0.0277778*valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_metro.value = 0.3048*valor;
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_yarda.value = 0.333333*valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value = 0.9144*valor;
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value = 3*valor;
    }
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';

    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularSuma(){
    var num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML= num1 + Number(num2);
}

function calcularResta(){
    var num1, num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= num1 - Number(num2);
}

function calcularMult(){
    var num1, num2;

    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= num1 * Number(num2);
}

function calcularDiv(){
    var num1, num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= num1 / Number(num2);
}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can, un;

    urlComp=window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen,yMax-40-margen,40,40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

var bandera;
function dibujar(event){
    var canvas= document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function limpiarCanvas(){
    var canvas= document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    var canvas= document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    var alturaMax = canvas.height;
    //Dibujar lineas horizontales
    for(var i=0; i<alturaMax;){
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.strokeStyle = "#00ffff";
        ctx.stroke();
        i= i+20;
    }
    ctx.closePath();

    var longitudMax = canvas.width;
    //Dibujar lineas verticales
    ctx.beginPath();
    for(var j=0; j<longitudMax;){
        ctx.moveTo(j, 0);
        ctx.lineTo(j, alturaMax);
        ctx.strokeStyle = "#00ffff";
        ctx.stroke();
        j= j+20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
        ctx.moveTo(0, alturaMax/2);
        ctx.lineTo(longitudMax, alturaMax/2);
        ctx.strokeStyle = "#00ff15";
        ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(longitudMax/2, 0);
    ctx.lineTo(longitudMax/2, alturaMax);
    ctx.strokeStyle = "#00ff15";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function (){
        ctx.drawImage(img, posX, posY);
    }
}