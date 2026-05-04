let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    if (!skills) return;
    
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        if(habilidades.length >= 10) {
            habilidades[0].classList.add("skill-unity");
            habilidades[1].classList.add("skill-csharp");
            habilidades[2].classList.add("skill-ar");
            habilidades[3].classList.add("skill-vr");
            habilidades[4].classList.add("skill-3ddesign");
            habilidades[5].classList.add("skill-comunicacion");
            habilidades[6].classList.add("skill-trabajo");
            habilidades[7].classList.add("skill-creatividad");
            habilidades[8].classList.add("skill-dedicacion");
            habilidades[9].classList.add("skill-proyect");
        }
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
        btnDestacado.style.position = 'relative'; 
    }

    // Modal de proyectos
    const btnVerTodos = document.getElementById('btn-ver-todos');
    const seccionProyectos = document.getElementById('todos-proyectos');
    const btnCerrar = document.getElementById('btn-cerrar-proyectos');
    
    if (btnVerTodos && seccionProyectos) {
        btnVerTodos.addEventListener('click', function() {
            seccionProyectos.classList.add('visible'); // Usar clase para animación
            document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
            window.scrollTo(0, 0); // Scroll al inicio
        });
    }
    
    if (btnCerrar && seccionProyectos) {
        btnCerrar.addEventListener('click', function() {
            seccionProyectos.classList.remove('visible');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Botones "Ver detalles" individuales
    const botonesDetalles = document.querySelectorAll('.btn-ver-detalles');
    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', function() {
            const proyectoId = this.getAttribute('data-proyecto');
            if(seccionProyectos) {
                seccionProyectos.classList.add('visible');
                document.body.style.overflow = 'hidden';
            }
            
            // Scroll al proyecto específico
            const proyectoCompleto = document.getElementById(proyectoId);
            if (proyectoCompleto) {
                setTimeout(() => {
                    proyectoCompleto.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300); // Pequeño delay para que el modal termine de abrirse
            }
        });
    });
});

// detecto el scrolling para aplicar la animacion de la barra de habilidades
window.addEventListener('scroll', function() {
    efectoHabilidades();
});