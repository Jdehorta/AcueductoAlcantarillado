//por medio de id conectamos los elementos

//qmd
const txtPoblacion = document.getElementById("poblacion");
const txtPDbruta = document.getElementById("dbruta");
const txtPeriodo = document.getElementById("periodo")
const txtPerdida = document.getElementById("perdida")

const btnCalcular = document.getElementById("calcular1");

const PresultadoQMD = document.getElementById("resultadoQMD");
const PresultadoQMDK1 = document.getElementById("resultadoqmdk1");
const PresultadoQMDK2 = document.getElementById("resultadoqmdk2");
const PresultadoQdls = document.getElementById("resultadoqdls");

//CAUDALES DEL RIO
const txtLongAnchoCresta = document.getElementById("longitudAnchoCresta");
const txtDiseñoPresa = document.getElementById("diseñoPresa");
const txtContraciones = document.getElementById("contraciones");
const PresultadoH = document.getElementById("resultadoH");




btnCalcular.addEventListener('click', calcular);
function calcular(){
     const op1 = parseFloat(txtPoblacion.value)
     const op2 = parseFloat(txtPDbruta.value)
     const op3 = parseFloat(txtLongAnchoCresta.value)
     const op4 = parseFloat(txtDiseñoPresa.value)
     const op5 = parseFloat(txtContraciones.value)
   

     QMD=(op1*op2)/86400
     QDMk1 = 1.3*QMD
     QDMk2 = 1.6*QDMk1
     QDLS = (1.1*QDMk1)/1000

     H = Math.pow(QDLS/(op3*op4),(1/1.5))

     PresultadoQMD.style = "color:white"
     PresultadoQMD.innerText = "QMD = " + QMD
     PresultadoQMDK1.innerText = "QMDK1 = " + QDMk1
     PresultadoQMDK2.innerText = "QMDK2 = " + QDMk2
     PresultadoQdls.innerText = "Qdls = " + QDLS

     PresultadoH.innerText = "H = " + H


       
    }