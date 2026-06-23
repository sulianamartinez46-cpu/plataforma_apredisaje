/* VARIABLES DE DISEÑO PROFESIONAL */
:root {
    --bg-main: #0b1329;
    --bg-surface: #1c2541;
    --bg-surface-light: #3a506b;
    --text-primary: #ffffff;
    --text-muted: #94a3b8;
    --primary: #00b4d8;
    --accent: #7209b7;
    --success: #4caf50;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* RESPONSIVO BÁSICO */
.responsive-img {
    width: 100%;
    height: auto;
    display: block;
}

/* NAVBAR */
.navbar {
    background-color: var(--bg-surface);
    padding: 1.2rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--text-primary);
    text-decoration: none;
}

.status-badge {
    background-color: rgba(76, 175, 80, 0.2);
    color: var(--success);
    padding: 0.4rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    border: 1px solid var(--success);
}

/* HERO (BANNER PRINCIPAL) */
.hero {
    padding: 4rem 0;
    background: linear-gradient(145deg, #0b1329 0%, #1c2541 100%);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

/* Cambio responsivo para tablets y PCs */
@media (min-width: 768px) {
    .hero-grid {
        grid-template-columns: 1.2fr 0.8fr;
    }
}

.hero-content h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.hero-content p {
    color: var(--text-muted);
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

/* SECCIÓN PROGRESO */
.progress-container {
    background-color: rgba(255,255,255,0.05);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1);
}

.progress-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
}

.progress-title {
    font-weight: bold;
    color: var(--primary);
}

.progress-bar-bg {
    background-color: #0b1329;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
}

.progress-bar-fill {
    background: linear-gradient(to right, var(--primary), var(--accent));
    width: 0%;
    height: 100%;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-img {
    border-radius: 16px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}

/* MÓDULOS EN GRID (RESPONSIVO) */
.main-content {
    padding: 5rem 0;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    text-align: center;
    color: var(--text-muted);
    margin-bottom: 3rem;
}

.modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

/* TARJETAS (CARDS) */
.card {
    background-color: var(--bg-surface);
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.4);
    border-color: rgba(255,255,255,0.15);
}

.card-image-box {
    height: 180px;
    overflow: hidden;
}

.card-image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-body {
    padding: 1.5rem;
}

.phase-tag {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.phase-tag.blue { background-color: rgba(0,180,216,0.15); color: #00b4d8; }
.phase-tag.purple { background-color: rgba(114,9,183,0.2); color: #b5179e; }
.phase-tag.orange { background-color: rgba(247,127,0,0.15); color: #f77f00; }
.phase-tag.red { background-color: rgba(214,40,40,0.15); color: #d62828; }

.card-body h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
}

.card-body p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

/* CHECKBOX INTERACTIVO */
.check-label {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b1329;
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.05);
    transition: background-color 0.2s;
}

.check-label:hover {
    background-color: var(--bg-surface-light);
}

.check-label input {
    margin-right: 12px;
    width: 18px;
    height: 18px;
    accent-color: var(--success);
}

/* SECCIÓN ESTADÍSTICAS */
.stats-section {
    background-color: var(--bg-surface);
    padding: 4rem 0;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.stat-box h3 {
    font-size: 2.2rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.stat-box p {
    color: var(--text-muted);
}

/* FAQ SECTION */
.faq-section {
    padding: 5rem 0;
}

.faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
}

@media (min-width: 768px) {
    .faq-grid { grid-template-columns: 1fr 1fr; }
}

.faq-item {
    background-color: var(--bg-surface);
    padding: 1.5rem;
    border-radius: 10px;
}

.faq-item h4 {
    margin-bottom: 0.5rem;
    color: var(--primary);
}

.faq-item p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* FOOTER */
.footer {
    background-color: #060b18;
    padding: 2rem 0;
    text-align: center;
    color: var(--text-muted);
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
}
