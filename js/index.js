/*Autor="Antony Inga Atunga" */
/*Es la variable en donde se registran todas las caracteristicas y subcaracteristicas con sus conceptos */
var caracteristicas = [{
    nombre: "Adecuacion Funcional",
    identificador: "001",
    subcaracteristicas: [
        { nombre: "Completitud Funcional", texto: "Grado en el cual el conjunto de funcionalidades cubre todas las tareas y los objetivos del usuario especificados." },
        { nombre: "Correccion Funcional", texto: "Capacidad del producto o sistema para proveer resultados correctos con el nivel de precisión requerido." },
        { nombre: "Pertinencia funcional", texto: "Capacidad del producto software para proporcionar un conjunto apropiado de funciones para tareas y objetivos de usuario especificados." }],
    texto: "proporcionar funciones que satisfacen las necesidades declaradas e implícitas, cuando el producto se usa en las condiciones especificadas"
}, {
    nombre: "Eficiencia y Desempeño",
    identificador: "002",
    subcaracteristicas: [
        { nombre: "Comportamiento Temporal", texto: "Los tiempos de respuesta y procesamiento y los ratios de throughput de un sistema cuando lleva a cabo sus funciones bajo condiciones determinadas en relación con un banco de pruebas (benchmark) establecido." },
        { nombre: "Utilizacion de recursos", texto: "Las cantidades y tipos de recursos utilizados cuando el software lleva a cabo su función bajo condiciones determinadas." },
        { nombre: "Capacidad", texto: "Grado en que los límites máximos de un parámetro de un producto o sistema software cumplen con los requisitos." }],
    texto: "representa el desempeño relativo a la cantidad de recursos utilizados bajo determinadas condiciones."
},
{
    nombre: "Compatibilidad",
    identificador: "003",
    subcaracteristicas: [{ nombre: "Coexistencia", texto: "Capacidad del producto para coexistir con otro software independiente, en un entorno común, compartiendo recursos comunes sin detrimento." },
    { nombre: "Interoperatibilidad", texto: "Capacidad de dos o más sistemas o componentes para intercambiar información y utilizar la información intercambiada." }],
    texto: "capacidad de dos o más sistemas o componentes para intercambiar información y/o llevar a cabo sus funciones requeridas "
}, {
    nombre: "Usabilidad",
    identificador: "004",
    subcaracteristicas: [
        { nombre: "Reconocer su Adecuación", texto: "Capacidad del producto que permite al usuario entender si el software es adecuado para sus necesidades." },
        { nombre: "Capacidad de Aprendizaje", texto: " Capacidad del producto que permite al usuario aprender su aplicaciónw." },
        { nombre: "Capacidad para ser Usado", texto: "Capacidad del producto que permite al usuario operarlo y controlarlo con facilidad." },
        { nombre: "Protección contra errores de usuario", texto: "Capacidad del sistema para proteger a los usuarios de hacer errores." },
        { nombre: "Estética de la interfaz de usuario", texto: "Capacidad de la interfaz de usuario  de agradar y satisfacer la interacción con el usuario." },
        { nombre: "Accesibilidad", texto: " Capacidad del producto que permite que sea utilizado por usuarios con determinadas características y discapacidades." }],
    texto: "Capacidad del producto software para ser entendido, aprendido, usado y resultar atractivo para el usuario"
},
{
    nombre: "Fiabilidad",
    identificador: "005",
    subcaracteristicas: [
        { nombre: "Madurez", texto: "Capacidad del sistema para satisfacer las necesidades de fiabilidad en condiciones normales." },
        { nombre: "Disponibilidad", texto: "Capacidad del sistema o componente de estar operativo y accesible para su uso cuando se requiere." },
        { nombre: "Tolerancia a fallos", texto: "Capacidad del sistema o componente para operar según lo previsto en presencia de fallos hardware o software." },
        { nombre: "Capacidad de recuperación", texto: "Capacidad del producto software para recuperar los datos directamente afectados y reestablecer el estado deseado del sistema en caso de interrupción o fallo." }],
    texto: "Capacidad de un sistema o componente para desempeñar  las funciones especificadas, cuando se usa bajo unas condiciones y periodo de tiempo determinados"
},
{
    nombre: "Seguridad",
    identificador: "006",
    subcaracteristicas: [{ nombre: "Confidencialidad", texto: "Capacidad de protección contra el acceso de datos e información no autorizados, ya sea accidental o deliberadamente." },
    { nombre: "Integridad", texto: " Capacidad del sistema o componente para prevenir accesos o modificaciones no autorizados a datos o programas de ordenador." },
    { nombre: "No repudio", texto: "Capacidad de demostrar las acciones o eventos que han tenido lugar, de manera que dichas acciones o eventos no puedan ser repudiados posteriormente." },
    { nombre: "Responsabilidad", texto: "Capacidad de rastrear de forma inequívoca las acciones de una entidad." },
    { nombre: "Autenticidad", texto: "Capacidad de demostrar la identidad de un sujeto o un recurso." }],
    texto: "Capacidad de protección de la información y los datos de manera que personas o sistemas no autorizados no puedan leerlos o modificarlos"
},
{
    nombre: "Mantenibilidad",
    identificador: "007",
    subcaracteristicas: [{ nombre: "Modularidad", texto: "Capacidad de un sistema o programa de ordenador (compuesto de componentes discretos) que permite que un cambio en un componente tenga un impacto mínimo en los demás." },
    { nombre: "Reusabilidad", texto: "Capacidad de un activo que permite que sea utilizado en más de un sistema software o en la construcción de otros activos." },
    { nombre: "Analizabilidad", texto: "Facilidad con la que se puede evaluar el impacto de un determinado cambio sobre el resto del software, diagnosticar las deficiencias o causas de fallos en el software, o identificar las partes a modificar." },
    { nombre: "Capacidad para ser modificado", texto: "Capacidad del producto que permite que sea modificado de forma efectiva y eficiente sin introducir defectos o degradar el desempeño." },
    { nombre: "Capacidad para ser probado", texto: "Facilidad con la que se pueden establecer criterios de prueba para un sistema o componente y con la que se pueden llevar a cabo las pruebas para determinar si se cumplen dichos criterios." }],
    texto: "Esta característica representa la capacidad del producto software para ser modificado efectiva y eficientemente"
},
{
    nombre: "Portabilidad",
    identificador: "008",
    subcaracteristicas: [{ nombre: "Adaptabilidad", texto: "Capacidad del producto que le permite ser adaptado de forma efectiva y eficiente a diferentes entornos determinados de hardware, software, operacionales o de uso." },
    { nombre: "Facilidad de instalacion", texto: "Facilidad con la que el producto se puede instalar y/o desinstalar de forma exitosa en un determinado entorno." },
    { nombre: "Capacidad de ser reemplazado", texto: "Capacidad del producto para ser utilizado en lugar de otro producto software determinado con el mismo propósito y en el mismo entorno." }],
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
        templateCaracteristica(element.nombre, "#caracteristicas", colores[Math.round(Math.random() * colores.length - 1)], element.identificador, element.texto)
        element.subcaracteristicas.forEach(subcaracteristicas => {
         templateSubCaracteristica(subcaracteristicas.nombre, "#subCaracteristicas", colores[Math.round(Math.random() * colores.length - 1)], Math.round(Math.random() * 50), element.identificador, subcaracteristicas.texto)
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
    $(".card").tooltip({ show: { effect: "explode", duration: 500, delay: 700 }, position: { my: "left center", at: "right center" } });
})

/*Con este metodo se crea las subcaracteristicas*/
/* Nombre="Nombre de las subcaracteristica"
identificador=Identificador de la subcaracteristica que sirve para Jquey
colorFondo=Sera el background de la subcaracteristica
zindex=Indicara la posicion en el eje Z 
identificadorPadre=Cada subcaracteristica tiene identificador del padre que servira si esa subcaracteristica pertenece a la caracteristica
tooltip=texto informativo de la caracteristica*/
function templateSubCaracteristica(nombre, identificador, colorFondo, zindex, identificadorPadre, tooltip) {
    let template = `<div class="card hoverable subCaracteristica dragable" title='${tooltip}' data-identificador=${identificadorPadre} style="background:${colorFondo};z-index:${zindex}">
<div class="front">
<h4> ${nombre}</h4> 
</div>

</div>`;
    $(identificador).append(template)
}
function comparacion(caracteristicaNumero, SubCaNumero, elementoDrag, elementoDrpp) {
   
    console.log(caracteristicaNumero, SubCaNumero)
    let estado=false;
    if (parseInt(caracteristicaNumero) == parseInt(SubCaNumero)) {
      estado=  aciertos(elementoDrpp)
        activarEstrella(elementoDrpp);
    } else {
        estado= fallidos(elementoDrpp)
    }
    let TextoElementoDrag = $(elementoDrag).find("h4").text();
    $(elementoDrpp).find("ul.resultados").append(`<ol >${TextoElementoDrag}<i class="material-icons " style="color:${estado ? 'green' : 'red'}">${estado ? 'check' : 'close'}</i></ol>`)
   

    $(elementoDrag).remove();
}
function aciertos(elementoDrop) {
    elemnetoPositivo = $(elementoDrop).find("p.positivo");
    elemnetoPositivo.text(parseInt(elemnetoPositivo.text()) + 1)
    $("p.acierto strong").text((parseInt($("p.acierto strong").text()) + 1));
    $("i#icon").html("mood")
    return true;
 
}
function fallidos(elementoDrop) {
    $(elementoDrop).find("p.negativo").text(parseInt($(elementoDrop).find("p.negativo").text()) + 1)
    $("p.fallido strong").text((parseInt($("p.fallido strong").text()) + 1))
    $("i#icon").html("mood_bad")
  return false;
}
function activarEstrella(elementoDrag) {
    $(elementoDrag).find("i.start").animate({
        color: "yellow",
        fontSize: "+=2rem"
    }, {
            duration: 500,
            complete: function () {
                $(this).animate({ color: "black", fontSize: "2rem" });
            }
        })
}
/*El metodo se encargara de agregar las caracteristicas al DOM 
nombre=Nombre de la caracteristica
identificador=sera el id de la caracteristica
colorFondo=el background de la caracteristica
identificadorPadre=es el id de la subcaracteristica que servira para ver si la subcaracteristica pertenece 
a la caracteristica
tooltip=texto informativo de la caracteristica*/
function templateCaracteristica(nombre, identificador, colorFondo, identificadorPadre, tooltip) {

    let template = ` <div class="col s12 m3 " style="position:relative" >
    <div class="card small  hoverable caracteristica" title='${tooltip}' data-identificador=${identificadorPadre} style="background:${colorFondo}">
    <div class="card-content">
    <div class="row">
    <div class="col s10">
    <span class="card-title activator grey-text text-darken-4">${nombre}</span>
    </div>
    <div class="col s2">
    <i class="material-icons right start small">star_border</i>
    </div>
    </div>
    
                        
                    <div class="divider"></div>
                    <div class="re">
                    <ul class="resultados overflow">
    
                    </ul>
                    </div>
                    
                      
    </div>
    

    

<div id="resultado">
<p class="numero positivo" >0</p>
<p class="numero  negativo" >0</p>
</div>


    </div>`
    $(identificador).append(template);
}