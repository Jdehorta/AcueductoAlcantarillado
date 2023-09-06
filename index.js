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
const PresultadoLongitudAnchoCresta = document.getElementById("resultadoLongitudCresta");
const PresultadoVelocidadPresa = document.getElementById("resultadoVelocidadPresa");

//DISEÑO CANAL DE ADUCCION Y REJILLA
const PresultadoXs = document.getElementById("resultadoXS");
const PresultadoXi= document.getElementById("resultadoXI");
const PresultadoB = document.getElementById("resultadoB");

const txtVb= document.getElementById("vb");
const txtDiametro = document.getElementById("diametro");
const txtK = document.getElementById("k")

btnCalcular.addEventListener('click', calcular);
function calcular(){
     const op1 = parseFloat(txtPoblacion.value)
     const op2 = parseFloat(txtPDbruta.value)
     const op3 = parseFloat(txtLongAnchoCresta.value)
     const op4 = parseFloat(txtDiseñoPresa.value)
     const op5 = parseFloat(txtContraciones.value)

     const opVb = parseFloat(txtVb.value)
     const opDiametro = parseFloat(txtDiametro.value)
     const opK= parseFloat(txtK.value)
   

     QMD=(op1*op2)/86400
     QDMk1 = 1.3*QMD
     QDMk2 = 1.6*QDMk1
     QDLS = (1.1*QDMk1)/1000

     H = Math.pow(QDLS/(op3*op4),(1/1.5))
     LongitudCorregida = (op3-0.1*(op5*H))
     VelocidadPresa = (QDLS/(H*LongitudCorregida))

     XS = (0.36*Math.pow(VelocidadPresa,2/3))+(0.6*Math.pow(H,4/7))
     XI = (0.18*Math.pow(VelocidadPresa,4/7))+(0.6*Math.pow(H,3/4))
     B = (XS + 0.1)
     

     PresultadoQMD.style = "color:white"
     PresultadoQMD.innerText = "QMD = " + QMD
     PresultadoQMDK1.innerText = "QMDK1 = " + QDMk1
     PresultadoQMDK2.innerText = "QMDK2 = " + QDMk2
     PresultadoQdls.innerText = "Qdls = " + QDLS

     PresultadoH.innerText = "H = " + H
     PresultadoLongitudAnchoCresta.innerText = "Longitud Corregida = " + LongitudCorregida
     PresultadoVelocidadPresa.innerText = "Velocidad del rio de la presa = " + VelocidadPresa

     PresultadoXs.innerText = "Xs = " + XS 
     PresultadoXi.innerText = "Xi = " + XI
     PresultadoB.innerText = "B = " + B
     

     


       
    }