import re

with open("estilo.css", "r", encoding="utf-8") as f:
    css = f.read()

# Fix syntax error
css = css.replace("* CONTENEDOR PRINCIPAL */", "/* CONTENEDOR PRINCIPAL */")

# Fix cursor: relative
css = css.replace("cursor: relative;", "cursor: pointer; position: relative;")

# Fix btn-ver-detalles visibility
css = css.replace("""
.btn-ver-detalles {
    background: #1CB698;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(10px);
}""", """
.btn-ver-detalles {
    background: #1CB698;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0.5rem;
    opacity: 1;
    transition: all 0.3s ease;
    transform: translateY(0px);
}""")

css = css.replace("""
.proyecto-miniatura:hover .btn-ver-detalles {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s; /* Pequeño retraso para mejor efecto */
}""", """
.proyecto-miniatura:hover .btn-ver-detalles {
    opacity: 1;
    transform: scale(1.05);
    transition-delay: 0.1s;
}""")

# Add modal fade-in
css = css.replace("""
.todos-proyectos {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1e2326;
    z-index: 1000;
    overflow-y: auto;
    padding: 2rem 0;
}""", """
.todos-proyectos {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1e2326;
    z-index: 1000;
    overflow-y: auto;
    padding: 2rem 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.todos-proyectos.visible {
    opacity: 1;
    visibility: visible;
}""")

new_skills_css = """

/* Nuevas animaciones de skills */
.skills .skill .skill-unity { width: 0%; animation: 2s skill-unity forwards; }
@keyframes skill-unity { 0% { width: 0%; } 100% { width: 90%; } }

.skills .skill .skill-csharp { width: 0%; animation: 2s skill-csharp forwards; }
@keyframes skill-csharp { 0% { width: 0%; } 100% { width: 80%; } }

.skills .skill .skill-ar { width: 0%; animation: 2s skill-ar forwards; }
@keyframes skill-ar { 0% { width: 0%; } 100% { width: 70%; } }

.skills .skill .skill-vr { width: 0%; animation: 2s skill-vr forwards; }
@keyframes skill-vr { 0% { width: 0%; } 100% { width: 80%; } }

.skills .skill .skill-3ddesign { width: 0%; animation: 2s skill-3ddesign forwards; }
@keyframes skill-3ddesign { 0% { width: 0%; } 100% { width: 80%; } }

.skills .skill .skill-comunicacion { width: 0%; animation: 2s skill-comunicacion forwards; }
@keyframes skill-comunicacion { 0% { width: 0%; } 100% { width: 90%; } }

.skills .skill .skill-trabajo { width: 0%; animation: 2s skill-trabajo forwards; }
@keyframes skill-trabajo { 0% { width: 0%; } 100% { width: 85%; } }

.skills .skill .skill-creatividad { width: 0%; animation: 2s skill-creatividad forwards; }
@keyframes skill-creatividad { 0% { width: 0%; } 100% { width: 80%; } }

.skills .skill .skill-dedicacion { width: 0%; animation: 2s skill-dedicacion forwards; }
@keyframes skill-dedicacion { 0% { width: 0%; } 100% { width: 85%; } }

.skills .skill .skill-proyect { width: 0%; animation: 2s skill-proyect forwards; }
@keyframes skill-proyect { 0% { width: 0%; } 100% { width: 75%; } }
"""

if "skill-unity" not in css:
    css += new_skills_css

with open("estilo.css", "w", encoding="utf-8") as f:
    f.write(css)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update Head
head_replacement = '''<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portafolio de Hernan Perez, Unity Developer especializado en experiencias inmersivas, juegos educativos y simulaciones con tecnologías AR/VR/XR.">
    <meta property="og:title" content="Hernan Perez | Unity Developer XR/AR/VR">
    <meta property="og:description" content="Portafolio de Hernan Perez, desarrollador de videojuegos y simulaciones.">
    <meta property="og:image" content="img/hp.jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Portfolio Hernan Perez</title>
    <link rel="stylesheet" href="estilo.css">
</head>'''
html = re.sub(r'<head>.*?</head>', head_replacement, html, flags=re.DOTALL)

# 2. Remove style="display: none;"
html = html.replace('style="display: none;"', '')

# 3. Remove inline styles width: 90% etc for progreso
html = re.sub(r'class="progreso"(\s*)style="width:\s*\d+%;"', r'class="progreso"', html)
html = html.replace('class="progreso"style="width: 90%;"', 'class="progreso"')
html = html.replace('class="progreso"style="width: 85%;"', 'class="progreso"')
html = html.replace('class="progreso"style="width: 80%;"', 'class="progreso"')

# 4. Remove redundant <div class="proyecto-destacado"> wrappers inside itself
html = re.sub(r'(<div id="([^"]+)" class="proyecto-destacado">\s*)(<!--.*?-->\s*)<div class="proyecto-destacado">', r'\g<1>\g<3>', html)
html = html.replace('</div>\\n            </div>\\n            <!--', '</div>\\n            <!--') # fix closing tags
html = re.sub(r'<!-- \.\.\. Todo el contenido detallado de VelozMente \.\.\. -->\s*<div class="proyecto-destacado">', '', html)
html = html.replace('<div class="proyecto-destacado">\n                <div class="contenedor-video-destacado">', '<div class="contenedor-video-destacado">')

# Better approach for the videos and posters:
def replace_video(match):
    video_tag = match.group(1)
    source_tag = match.group(2)
    img_tag = match.group(3)
    
    # Extract src from img_tag
    img_src_match = re.search(r'src="([^"]+)"', img_tag)
    if img_src_match:
        poster_url = img_src_match.group(1)
        new_video_tag = video_tag.replace('playsinline>', f'playsinline poster="{poster_url}">')
        return f'{new_video_tag}\\n{source_tag}\\n</video>'
    return match.group(0)

html = re.sub(r'(<video[^>]*playsinline>)\s*(<source[^>]*>)\s*(?:<!--.*?-->\s*)?(<img[^>]*>)\s*</video>', replace_video, html)

# Also add loading="lazy" to all img tags
def add_lazy(match):
    img = match.group(0)
    if 'loading=' not in img:
        return img.replace('<img ', '<img loading="lazy" ')
    return img

html = re.sub(r'<img[^>]+>', add_lazy, html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
