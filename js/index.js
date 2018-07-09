var caracteristicas = [{
    nombre: "Adecuacion Funcional",
    identificador: "001",
    subcaracteristicas: ["Completitud Funcional", "Correccion Funcional", "Pertinencia funcional"],
    texto: "proporcionar funciones que satisfacen las necesidades declaradas e implícitas, cuando el producto se usa en las condiciones especificadas"
}, {
    nombre: "Eficiencia y Desempeño",
    identificador: "002",
    subcaracteristicas: ["Comportamiento Temporal", "Utilizacion de recursos", "Capacidad"],
    texto: "representa el desempeño relativo a la cantidad de recursos utilizados bajo determinadas condiciones."
},
{
    nombre: "Compatibilidad",
    identificador: "003",
    subcaracteristicas: ["Coexistencia", "Interoperatibilidad"],
    texto: "capacidad de dos o más sistemas o componentes para intercambiar información y/o llevar a cabo sus funciones requeridas "
}, {
    nombre: "Usabilidad",
    identificador: "004",
    subcaracteristicas: ["Reconocer su Adecuación", "Capacidad de Aprendizaje", "Capacidad para ser Usado",
        "Protección contra errores de usuario", "Estética de la interfaz de usuario", "Accesibilidad"],
    texto: "Capacidad del producto software para ser entendido, aprendido, usado y resultar atractivo para el usuario"
},
{
    nombre: "Fiabilidad",
    identificador: "005",
    subcaracteristicas: ["Madurez", "Disponibilidad", "Tolerancia a fallos",
        "Capacidad de recuperación"],
    texto: "Capacidad de un sistema o componente para desempeñar  las funciones especificadas, cuando se usa bajo unas condiciones y periodo de tiempo determinados"
},
{
    nombre: "Seguridad",
    identificador: "006",
    subcaracteristicas: ["Confidencialidad", "Integridad", "No repudio",
        "Responsabilidad", "Autenticidad"],
    texto: "Capacidad de protección de la información y los datos de manera que personas o sistemas no autorizados no puedan leerlos o modificarlos"
},
{
    nombre: "Mantenibilidad",
    identificador: "007",
    subcaracteristicas: ["Modularidad", "Reusabilidad", "Analizabilidad",
        "Capacidad para ser modificado", "Capacidad para ser probado"],
    texto: "Esta característica representa la capacidad del producto software para ser modificado efectiva y eficientemente"
},
{
    nombre: "Portabilidad",
    identificador: "008",
    subcaracteristicas: ["Adaptabilidad", "Facilidad de instalacion", "Capacidad de ser reemplazado"],
    texto: "Esta característica representa la capacidad del producto software para ser modificado efectiva y eficientemente"
}]
var template_carta = `<div class="card hoverable subCaracteristica">
<div class="front">

</div>
<div class="back">

</div>
Este es una carta
</div>`;
var icon = $("i#icon");
var colores = ["#69f0ae", "#69f0ae", "#18ffff", "#b388ff", "#ff8a80", "#ea80fc ", "#b0bec5", "#ffe57f"];

$(document).ready(function () {
    caracteristicas.forEach(element => {
        agregacionTemplateCaracteristicas(element.nombre, "#caracteristicas", colores[Math.round(Math.random() * colores.length - 1)], element.identificador, element)
        element.subcaracteristicas.forEach(subcaracteristicas => {
            agregacionTemplateSub(subcaracteristicas, "#subCaracteristicas", colores[Math.round(Math.random() * colores.length - 1)], Math.round(Math.random() * 50), element.identificador)
        })
    });
    $(".dragable").draggable({
        opacity: 0.70,
        cursor: "move",
        helper: "original",

    });
    $(".caracteristica").droppable({
        drop: function (event, ui) {
            comparacion($(this).attr("data-identificador"), $(ui.draggable).attr("data-identificador"), ui.draggable, this)
        }
    });
    $( ".card" ).tooltip({show: { effect: "explode", duration: 800 }});
})
function agregacionTemplateSub(Nombre, identificado, colorFondo, zindex, identificadorPadre) {
    let template = `<div class="card hoverable subCaracteristica dragable" data-identificador=${identificadorPadre} style="background:${colorFondo};z-index:${zindex}">
<div class="front">
<h4 style="color:white"> ${Nombre}</h4> 
</div>

</div>`;
    $(identificado).append(template)
}
function comparacion(caracteristicaNumero, SubCaNumero, elementoDrag, elementoDrpp) {
    let estado = true;
    console.log(caracteristicaNumero, SubCaNumero)
    if (parseInt(caracteristicaNumero) == parseInt(SubCaNumero)) {
        estado = aciertos(elementoDrpp)
    } else {
        estado = fallidos(elementoDrpp)
    }
    let TextoElementoDrag = $(elementoDrag).find("h4").text();
    $(elementoDrpp).find("ul#resultados").append(`<ol>${TextoElementoDrag}<i class="material-icons " style="color:${estado ? 'green' : 'red'}">${estado ? 'check' : 'close'}</i></ol>`)
    console.log("estado" + estado, $(elementoDrpp).find("ul#resultados"))

    $(elementoDrag).remove();
}
function aciertos(elementoDrop) {
    $(elementoDrop).find("p#positivo").text( parseInt($(elementoDrop).find("p#positivo").text())+1)

    $("p.acierto strong").text((parseInt($("p.acierto strong").text()) + 1));
    $("i#icon").html("mood")
    return true;
}
function fallidos(elementoDrop) {
    $(elementoDrop).find("p#negativo").text( parseInt($(elementoDrop).find("p#negativo").text())+1)
        $("p.fallido strong").text((parseInt($("p.fallido strong").text()) + 1))
    $("i#icon").html("mood_bad")
    return false;
}
function agregacionTemplateCaracteristicas(Nombre, identificador, colorFondo, identificadorPadre, elemento) {
    
    let template = ` <div class="col s12 m3 " style="position:relative" >
    <div class="card small  hoverable caracteristica" title='${elemento.texto}' data-identificador=${identificadorPadre} style="background:${colorFondo}">
    <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${Nombre}
                        <i class="material-icons right">star_border</i>
                    <div class="divider"></div></span>
                    <div id="re">
                    <ul id="resultados">
    
                    </ul>
                    </div>
                    
                      
    </div>
    

    

<div id="resultado">
<p class="numero" id="positivo">0</p>
<p class="numero " id="negativo">0</p>
</div>


    </div>`
    $(identificador).append(template);
}