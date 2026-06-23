/* CONFIGURACIÓN GENERAL EN MODO OSCURO */
:root {
    --bg-dark: #0b0f19;
    --bg-surface: #161b26;
    --bg-input: #1f2633;
    --text-white: #ffffff;
    --text-gray: #94a3b8;
    --blue: #3b82f6;
    --purple: #8b5cf6;
    --cyan: #06b6d4;
    --orange: #f97316;
    --red: #ef4444;
    --green: #10b981;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    line-height: 1.6;
}

.container {
    width: 92%;
    max-width: 1200px;
    margin: 0 auto;
}

.img-responsive {
    width: 100%;
    height: auto;
    display: block;
}

/* NAVBAR */
.navbar {
    background-color: var(--bg-surface);
    padding: 1.2rem 0;
    border-bottom: 1px solid #242b3d;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--text-white);
    text-decoration: none;
}

.status-badge {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--green);
    border: 1px solid var(--green);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

/* HERO SECTION */
.hero {
    padding: 4rem 0;
    background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-dark) 100%);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

@media (min-width: 768px) {
    .hero-grid { grid-template-columns: 1.2fr 0.8fr; }
}

.hero-text h1 {
    font-size: 2.6rem;
    line-height: 1.2;
    margin-bottom: 1.2rem;
}

.hero-text p {
    color: var(--text-gray);
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

/* AVANCE DEL ALUMNO */
.progress-wrapper {
    background-color: var(--bg-surface);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #242b3d;
}

.progress-meta {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 0.6rem;
}

.progress-bar-container {
    background-color: var(--bg-dark);
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
}

.progress-bar-fill {
    background: linear-gradient(90deg, var(--blue), var(--purple));
    width: 0%;
    height: 100%;
    transition: width 0.4s ease;
}

.main-img {
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

/* EXPLICACIÓN ADICIONAL */
.info-section { padding: 2rem 0; }
.info-card {
    background-color: rgba(59, 130, 246, 0.05);
    border: 1px dashed var(--blue);
    padding: 2rem;
    border-radius: 12px;
}
.info-card h2 { margin-bottom: 0.5rem; font-size: 1.5rem; }
.info-card p { color: var(--text-gray); }

/* SECCIÓN MÓDULOS */
.main-content { padding: 3rem 0; }
.section-title { text-align: center; margin-bottom: 3rem; font-size: 2rem; }

.modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* CARDS CON IMÁGENES */
.card {
    background-color: var(--bg-surface);
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid #242b3d;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
}

.card-img-box {
    height: 200px;
    overflow: hidden;
}

.card-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body { padding: 1.5rem; }

.tag {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 0.8rem;
}
.tag.blue { background-color: rgba(59,130,246,0.15); color: var(--blue); }
.tag.purple { background-color: rgba(139,92,246,0.15); color: var(--purple); }
.tag.cyan { background-color: rgba(6,182,212,0.15); color: var(--cyan); }
.tag.orange { background-color: rgba(249,115,22,0.15); color: var(--orange); }
.tag.red { background-color: rgba(239,68,68,0.15); color: var(--red); }
.tag.green { background-color: rgba(16,185,129,0.15); color: var(--green); }

.card-body h3 { font-size: 1.25rem; margin-bottom: 0.6rem; }
.card-body p { color: var(--text-gray); font-size: 0.95rem; margin-bottom: 1.5rem; }

/* CHECKBOX COMO BOTÓN */
.btn-check {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-dark);
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    border: 1px solid #242b3d;
}

.btn-check input { margin-right: 10px; width: 16px; height: 16px; accent-color: var(--green); }

/* ESTADÍSTICAS */
.stats-bg { background-color: var(--bg-surface); padding: 4rem 0; margin: 4rem 0; text-align: center; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
.stat-item h3 { font-size: 2rem; color: var(--blue); }
.stat-item p { color: var(--text-gray); }

/* FORMULARIO LARGO ADICIONAL */
.contact-section { padding-bottom: 5rem; }
.contact-box { background-color: var(--bg-surface); padding: 2.5rem; border-radius: 14px; border: 1px solid #242b3d; max-width: 600px; margin: 0 auto; }
.contact-box h3 { margin-bottom: 0.5rem; }
.contact-box p { color: var(--text-gray); margin-bottom: 1.5rem; font-size: 0.95rem; }
.contact-box input, .contact-box textarea { width: 100%; padding: 0.8rem; background-color: var(--bg-dark); border: 1px solid #242b3d; color: white; border-radius: 6px; margin-bottom: 1rem; }
.submit-btn { background-color: var(--blue); color: white; border: none; padding: 0.8rem 1.5rem; font-weight: bold; border-radius: 6px; cursor: pointer; width: 100%; }

/* FOOTER */
.footer { text-align: center; padding: 2.5rem 0; background-color: #06080e; color: var(--text-gray); font-size: 0.9rem; border-top: 1px solid #242b3d; }
