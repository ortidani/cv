//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Ocultar menu una vez seleccionada una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length ; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Crear las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//Selecciono todas las barras generales para luego manipularlas

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let java = document.getElementById("java");
crearBarra(java);
let python = document.getElementById("python");
crearBarra(python);
let database = document.getElementById("database");
crearBarra(database);
let compromiso = document.getElementById("compromiso");
crearBarra(compromiso);


//Pintamos las barritas para cada barra

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>= 300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 12, 0, intervalHtml)
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 7, 1, intervalJavascript)
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 8, 2, intervalJava)
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 6, 3, intervalPython)
        },100);
        const intervalDatabase= setInterval(function(){
            pintarBarra(database, 12, 4, intervalDatabase)
        },100);
        const intervalCompromiso = setInterval(function(){
            pintarBarra(compromiso, 18, 5, intervalCompromiso)
        },100);
    }
}
//lleno una barra en particular con la cantidad corrrespondiente

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2B3ECC";
    }
    else{
        clearInterval(interval)
    }
}
//Detecto el scrolling en el mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
