/*Menu Responsive*/

var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menu-bar")
    enlaces = document.getElementById("enlaces");

    //Click Abrir
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active")
    });

    //Click Cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.style.transition = "transform 1s";
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active")
    });

    //Cerrar Menú con elementos de enlace
    enlaces.addEventListener("click", function(){
        menuResponsive.style.transition = "transform 1s";
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active")
    })


/*Slider de Servicios*/

var contenedor = document.querySelector('.slider'),
    btnizquierdo = document.getElementById('btn-izquierdo'),
    btnderecho = document.getElementById('btn-derecho');

    //FORMA INICIAL COMENTADA
    //Evento para el botón derecho
    //btnderecho.addEventListener("click", function(){
        /*Tamaño total de la página 
        += se utiliza para acumular*/
        //contenedor.scrollLeft += contenedor.offsetWidth;
    //});

     //Evento para el botón izquierdo
    //btnizquierdo.addEventListener("click", function(){
        //contenedor.scrollLeft -= contenedor.offsetWidth;
    //});

    //Aplicando Animacion

    function scrollLento(el, deltaPx, durationMs = 1200) {
        //Posición Actual
        const inicio = el.scrollLeft;
        //Posición donde queremos llegar
        const fin = inicio + deltaPx;
        //Tiempo Inicial
        const t0 = performance.now();

        function animar(t) {
            //Progreso de 0 a 1 según el tiempo transcurrido
            const progreso = Math.min((t - t0) / durationMs, 1);

            //Interpolación lineal: inicio + (fin - inicio) * progreso
            el.scrollLeft = inicio + (fin - inicio) * progreso;

            //Animar
            if (progreso < 1) requestAnimationFrame(animar);
        }

        requestAnimationFrame(animar);
    }

btnderecho.addEventListener("click", () => scrollLento(contenedor,  contenedor.offsetWidth, 1200));
btnizquierdo.addEventListener("click", () => scrollLento(contenedor, -contenedor.offsetWidth, 1200));

//Validación de Formulario

var fomrulario = document.getElementById("formulario");

    function validarData(e){
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComments = document.getElementById("comentarios"),
            alertaSuccess = document.getElementById("alertaSuccess"),
            alertaError = document.getElementById("alertaError");
        
        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComments.value ==0){
            e.preventDefault();
            alertaError.classList.remove("hide");
            alertaError.classList.add("show");

            setTimeout(() => {
                alertaError.classList.remove("show");
                alertaError.classList.add("hide");
            }, 2000);

        }else{
            e.preventDefault();
            alertaSuccess.classList.remove("hide");
            alertaSuccess.classList.add("show");

            setTimeout(() => {
                alertaSuccess.classList.remove("show");
                alertaSuccess.classList.add("hide");
            }, 2000);
            inputNombre.value = "";
            inputEmail.value = "";
            inputComments.value = "";

        }
    }

//Eventos del formulario
fomrulario.addEventListener("submit", validarData);

//Control Boton Scroll TOP
var btntop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

//Detectamos Scroll en nuestra página web
window.addEventListener("scroll", function(){
        /*Alto completo de la página*/
    var scroll = document.documentElement.scrollTop,
        /*Altura de la pantalla (Lo que se visualiza)*/
        fullSize = document.documentElement.offsetHeight,
        /*Tamaño del Scroll*/
        sizeViewPort = document.documentElement.clientHeight;
        /*Alto Completo Página = Altura Pantalla + Tamaño Scroll*/
    if (scroll > 100){
        btntop.classList.add("show");
    }
    else{
        btntop.classList.remove("show");
    }

    //Modificar elmento cuando al final de la página
    if (fullSize == (scroll +  sizeViewPort)){
        btntop.classList.add("scrollFinal")
    }
});

//Detectamos evento click en el botón
btntop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

//Detectar Evento Click Logo
logo.addEventListener("click", function(){
    window.scrollTo(0,0);
});
