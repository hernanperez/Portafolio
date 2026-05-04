// Project Data
const projectsData = {
    'modal-1': {
        title: 'Laboratorio Financiero',
        tagline: 'Formación con énfasis en procesos BPO y KPO',
        video: 'Videos/financiero.mp4',
        poster: 'img/interactive.png',
        tech: ['Unity', 'C#', 'UI/UX', 'Game Design'],
        features: [
            { icon: 'fa-brain', title: 'Ejercicio cognitivo', desc: 'Fortalece la preparación brindando una experiencia cercana a la realidad empresarial.' },
            { icon: 'fa-clock', title: 'Decide ahora', desc: 'Fomenta la toma de decisiones en un ambiente controlado.' },
            { icon: 'fa-users', title: 'Individual o grupal', desc: 'Diseñado para disfrutarse solo o en grupo.' }
        ]
    },
    'modal-2': {
        title: 'Corona Training',
        tagline: 'Entrenamiento de habilidades blandas y técnicas',
        video: 'Videos/corona.mp4',
        poster: 'img/corona.png',
        tech: ['Unity', 'C#', 'VR', 'UI/UX', 'Training'],
        features: [
            { icon: 'fa-industry', title: 'Sector Industrial', desc: 'Entrenamiento técnico con toma de decisiones basadas en casos reales.' },
            { icon: 'fa-shield-halved', title: 'Seguridad', desc: 'Recrea condiciones reales sin los riesgos del entorno físico.' },
            { icon: 'fa-vr-cardboard', title: 'Inmersión Total', desc: 'Uso de Realidad Virtual para máximo enfoque y retención.' }
        ]
    },
    'modal-3': {
        title: 'Mantenimiento Alta Tensión',
        tagline: 'Simulador VR para el sector eléctrico',
        video: 'Videos/electrico.mp4',
        poster: 'img/electrico.png',
        tech: ['Unity', 'C#', 'VR', 'Training'],
        features: [
            { icon: 'fa-bolt', title: 'Procedimientos Exactos', desc: 'Paso a paso guiado para mantenimiento de líneas vivas.' },
            { icon: 'fa-triangle-exclamation', title: 'Prevención de Riesgos', desc: 'Entrenamiento seguro para operaciones de alto riesgo.' },
            { icon: 'fa-vr-cardboard', title: 'Realidad Virtual', desc: 'Inmersión completa en entornos de altura.' }
        ]
    },
    'modal-4': {
        title: 'Gestión Documental',
        tagline: 'Producción, gestión y trámite de documentos electrónicos',
        video: 'Videos/archie1.mp4',
        poster: 'img/archie-01.png',
        tech: ['Unity', 'C#', 'UI/UX', 'Educación'],
        features: [
            { icon: 'fa-folder-open', title: 'Procesos Reales', desc: 'Simulación precisa de flujos de trabajo documentales.' },
            { icon: 'fa-computer-mouse', title: 'Interactivo', desc: 'Interfaz diseñada para facilitar el aprendizaje.' }
        ]
    },
    'modal-5': {
        title: 'Pintura Industrial',
        tagline: 'Entrenamiento en cabinas de pintura',
        video: 'Videos/pintura.mp4',
        poster: 'img/pintura.png',
        tech: ['Unity', 'VR', 'Industrial', 'Simulación'],
        features: [
            { icon: 'fa-spray-can', title: 'Físicas Realistas', desc: 'Simulación del comportamiento de la pintura y presión.' },
            { icon: 'fa-chart-pie', title: 'Analíticas', desc: 'Evaluación de desperdicio y cobertura en tiempo real.' }
        ]
    },
    'modal-6': {
        title: 'Seluverso',
        tagline: 'Plataforma de consolidación de aprendizaje',
        video: 'Videos/seluverso.mp4',
        poster: 'img/seluverso3.jpg',
        tech: ['Unity', 'Gamification', 'Educación', 'Multiplayer'],
        features: [
            { icon: 'fa-gamepad', title: 'Gamificación', desc: 'Aprende a cumplir objetivos dentro de un entorno gamificado.' },
            { icon: 'fa-globe', title: 'Mundos Virtuales', desc: 'Exploración interactiva para estudiantes.' }
        ]
    },
    'modal-7': {
        title: 'Juegos Comfama',
        tagline: 'Juego point and click con narrativa épica',
        video: 'Videos/prueba.mp4',
        poster: 'img/comfama.jpg',
        tech: ['Unity', 'C#', 'UI/UX', 'Móvil', 'Game Design', 'Educación'],
        features: [
            { icon: 'fa-brain', title: 'Atención al Detalle', desc: 'Reta la agilidad mental para resolver retos de atención.' },
            { icon: 'fa-heart-pulse', title: 'Hábitos Saludables', desc: 'Descubre y aprende hábitos de vida saludable.' },
            { icon: 'fa-mobile-screen', title: 'Móvil', desc: 'Diseñado y optimizado para dispositivos móviles.' }
        ]
    },
    'modal-8': {
        title: 'VelozMente',
        tagline: 'Desafío matemático y de comprensión lectora',
        video: 'Videos/veloz.mp4',
        poster: 'img/port_veloz.png',
        tech: ['Unity', 'C#', 'UI/UX', 'Game Design', 'Educación'],
        features: [
            { icon: 'fa-calculator', title: 'Matemáticas ágiles', desc: 'Resuelve rápidamente operaciones para derrotar alienígenas y dragones.' },
            { icon: 'fa-book-open', title: 'Comprensión Lectora', desc: 'Retos de lectura integrados en la narrativa.' },
            { icon: 'fa-child-reaching', title: 'Desarrollo Cognitivo', desc: 'Fortalece el sentido de lateralidad en los primeros años.' }
        ]
    },
    'modal-9': {
        title: 'Aima',
        tagline: 'Una historia sobre una humanidad desolada',
        video: 'Videos/aima.mp4',
        poster: 'img/aima.png',
        tech: ['Unity', 'C#', 'UI/UX', 'Narrativa', 'Game Design', 'Educación'],
        features: [
            { icon: 'fa-book', title: 'Narrativa Profunda', desc: 'Producto en colaboración con estudiantes de la U. EAFIT.' },
            { icon: 'fa-brain', title: 'Agilidad Mental', desc: 'Retos matemáticos y de atención al detalle.' },
            { icon: 'fa-face-laugh-beam', title: 'Aprendizaje Divertido', desc: 'Aprender sobre cualquier temática no tiene por qué ser aburrido.' }
        ]
    },
    'modal-10': {
        title: 'Buscando el Tesoro',
        tagline: 'Un maravilloso viaje por las islas del conocimiento',
        video: 'Videos/tesoro.mp4',
        poster: 'img/tesoro.jpg',
        tech: ['Unity', 'C#', 'UI/UX', 'Narrativa', 'Game Design', 'Educación'],
        features: [
            { icon: 'fa-map', title: 'Islas del Conocimiento', desc: 'Viaje interactivo evaluando ciencias, matemáticas y más.' },
            { icon: 'fa-check-double', title: 'Evaluación Dinámica', desc: 'Elimina métodos tradicionales por una experiencia motivadora.' },
            { icon: 'fa-school', title: 'Conocimientos Previos', desc: 'Diseñado para evaluar conocimientos en entornos escolares.' }
        ]
    },
    'modal-11': {
        title: 'Simulador Gestión Documental',
        tagline: 'Trámite de documentos y expedientes electrónicos',
        video: 'Videos/archie2.mp4',
        poster: 'img/archie2.jpg',
        tech: ['Unity', 'C#', 'UI/UX', 'Game Design', 'Educación'],
        features: [
            { icon: 'fa-desktop', title: 'Entorno Virtual', desc: 'Aplicación inmersiva en un entorno sociocultural virtual.' },
            { icon: 'fa-bridge', title: 'Cierra la Brecha', desc: 'Acerca al aprendiz a su futura realidad laboral.' },
            { icon: 'fa-shield-halved', title: 'Sin Riesgos', desc: 'Práctica segura sin errores costosos para las empresas.' }
        ]
    },
    'modal-12': {
        title: 'Sena Bank',
        tagline: 'Producto Tecnopedagógico de entrenamiento',
        video: 'Videos/Living Lab.mp4',
        poster: 'img/BANCO SENA-01-01.png',
        tech: ['Unity', 'C#', 'UI/UX', 'VR', 'Narrativa', 'Game Design', 'Educación'],
        features: [
            { icon: 'fa-building-columns', title: 'Gestión Bancaria', desc: 'Evalúa conocimientos de Tecnología en Entidades Financieras.' },
            { icon: 'fa-lightbulb', title: 'Innovación Educativa', desc: 'Experiencia motivadora y dinámica de medición de aprendizaje.' },
            { icon: 'fa-vr-cardboard', title: 'Entrenamiento Inmersivo', desc: 'Simulación realista de un banco para aprendices.' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.remove('fa-xmark');
                menuBtn.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // 4. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's the skills section, trigger progress bars
                if (entry.target.classList.contains('skill-category')) {
                    const bars = entry.target.querySelectorAll('.progress');
                    bars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                }
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    revealElements.forEach(el => revealObserver.observe(el));

    // 5. Modal Logic
    const modalContainer = document.getElementById('modal-container');
    
    window.openModal = (id) => {
        const data = projectsData[id];
        if (!data) return;

        let featuresHtml = data.features.map(f => `
            <div class="feature">
                <i class="fa-solid ${f.icon}"></i>
                <div>
                    <h4>${f.title}</h4>
                    <p>${f.desc}</p>
                </div>
            </div>
        `).join('');

        let tagsHtml = data.tech.map(t => `<span class="tag">${t}</span>`).join('');

        modalContainer.innerHTML = `
            <div class="modal-overlay active" id="current-modal" onclick="closeModal(event)">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
                    <div class="modal-body">
                        <div class="modal-video">
                            <video autoplay muted loop playsinline poster="${data.poster}">
                                <source src="${data.video}" type="video/mp4">
                            </video>
                        </div>
                        <div class="modal-info">
                            <h2>${data.title}</h2>
                            <p class="tagline">${data.tagline}</p>
                            <div class="modal-features">
                                ${featuresHtml}
                            </div>
                            <div class="tags" style="margin-top: 2rem;">
                                ${tagsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    window.closeModal = (e) => {
        // If event exists and target is not the overlay itself, don't close
        if (e && e.target.id !== 'current-modal') return;
        
        const modal = document.getElementById('current-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modalContainer.innerHTML = '';
                document.body.style.overflow = ''; // Restore scrolling
            }, 300); // Wait for transition
        }
    };
});
