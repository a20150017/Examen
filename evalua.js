var nom = prompt("Ingresa tu Nombre");
var corr = 0
var incorr = 0
alert("Bienvenido " + nom + ", ¿Cómo estás?, realiza el siguiente cuestionario (coloca la letra de las respuestas en mayúscula):");
var res1 = prompt("¿En qué departamento se encuentra el lago Titicaca?\nA. Tacna\nB. Puno\nC. Cusco");
if(res1 == "B"){
   corr + 1;
}else{
    incorr + 1;
}
var res2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA. Lima e Ica\nB. Arequiupa y Tacna\nC. Piura y Tumbes");
if(res2 == "C"){
    corr + 1;
}else{
    incorr + 1;
}
var res3 = prompt("Plato típico de la Selva peruana\nA. Tacacho con cecina\nB. Arroz con pollo\nC. Lomo saltado");
if(res3 == "A"){
    corr + 1;
}else{
    incorr + 1;
}
document.write("<h1>Cuestionario</h1>")
if(corr>incorr){
    document.write("<p>Lo has hecho bien </p>" + nom)
}else{
    document.write("<p>Vuelve a intentarlo </p>" + nom)
}


