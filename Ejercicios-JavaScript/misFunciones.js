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