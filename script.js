let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Unity3D");
        habilidades[1].classList.add("C# Programming");
        habilidades[2].classList.add("AR Development");
        habilidades[3].classList.add("VR Development");
        habilidades[4].classList.add("3D Interaction Design");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Animación para los elementos de características
    const caracteristicas = document.querySelectorAll('.caracteristica-item');
    
    function animarCaracteristicas() {
        caracteristicas.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    }
    
    // Inicialmente oculto para la animación
    caracteristicas.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Lanzar animación cuando la sección sea visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animarCaracteristicas();
        }
    }, { threshold: 0.1 });
    
    const seccionPortfolio = document.querySelector('.portfolio');
    if (seccionPortfolio) {
        observer.observe(seccionPortfolio);
    }

    const btnDestacado = document.querySelector('.btn-destacado');
if (btnDestacado) {
    btnDestacado.style.position = 'relative'; // Asegúrate de que no esté siendo reposicionado
}
});

document.addEventListener('DOMContentLoaded', function() {
    // Botón "Ver todos"
    const btnVerTodos = document.getElementById('btn-ver-todos');
    const seccionProyectos = document.getElementById('todos-proyectos');
    
    btnVerTodos.addEventListener('click', function() {
        seccionProyectos.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
    });
    
    // Botón "Cerrar"
    const btnCerrar = document.getElementById('btn-cerrar-proyectos');
    btnCerrar.addEventListener('click', function() {
        seccionProyectos.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
   // Botones "Ver detalles" individuales
   const botonesDetalles = document.querySelectorAll('.btn-ver-detalles');
   botonesDetalles.forEach(boton => {
       boton.addEventListener('click', function() {
           const proyectoId = this.getAttribute('data-proyecto');
           seccionProyectos.style.display = 'block';
           document.body.style.overflow = 'hidden';
           
           // Scroll al proyecto específico
           const proyectoCompleto = document.getElementById(proyectoId);
           if (proyectoCompleto) {
               proyectoCompleto.scrollIntoView({ behavior: 'smooth' });
           }
           proyectoCompleto.scrollIntoView({ behavior: 'smooth' });
       });
   });

   ocument.addEventListener('DOMContentLoaded', function() {
    const btnVerTodos = document.getElementById('btn-ver-todos');
    const btnCerrar = document.getElementById('btn-cerrar-proyectos');
    const seccionProyectos = document.getElementById('todos-proyectos');
    
    btnVerTodos.addEventListener('click', function() {
        seccionProyectos.style.display = 'block';
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0); // Scroll al inicio
    });
    
    btnCerrar.addEventListener('click', function() {
        seccionProyectos.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});
});





//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 