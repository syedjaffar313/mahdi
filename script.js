// ============================================
// GATES NOTES–INSPIRED INTERACTIONS
// ============================================

// ─── Translations ───
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.recommendations': 'Recommendations',
        'nav.certifications': 'Certifications',
        'nav.education': 'Education',
        'nav.languages': 'Languages',
        'nav.contact': 'Contact',

        'hero.eyebrow': 'Cloud Solution Architect Intern \u2014 Microsoft',
        'hero.sub': 'Building cloud resilience, strengthening security posture, and helping organisations navigate their Azure journey.',
        'hero.location': 'Brussels, Belgium',
        'hero.cta': 'Get in Touch',
        'hero.readmore': 'Read More \u2193',

        'about.label': 'About',
        'about.p1': '<strong>Cloud Solution Architect Intern at Microsoft</strong> with an interest in cloud infrastructure, governance, and resiliency. My background spans enterprise IT and endpoint modernization alongside public\u2011sector policy and digital research, offering a balanced technical and institutional perspective on cloud transformation.',
        'about.p2': 'Previously worked as a <strong>Policy &amp; Digital Research Intern at the National Assembly of Pakistan</strong>, contributing to an electric vehicle policy proposal through Excel\u2011based modelling and supporting citizen engagement digitization initiatives focused on data\u2011driven decision\u2011making and governance frameworks.',
        'about.p3': 'Earlier experience as a <strong>television presenter and sports analyst</strong>, including coverage of the FIFA World Cup, shaped a strong ability to communicate complex topics clearly to diverse audiences. Passionate about helping organizations modernize infrastructure, strengthen security posture, and make confident, informed decisions throughout their cloud journey.',
        'about.card1.title': 'Focus Area',
        'about.card1.desc': 'Cloud Infrastructure & Governance',
        'about.card2.title': 'Education',
        'about.card2.desc': 'MSc & BSc Political Science - VUB & UGent',
        'about.card3.title': 'Languages',
        'about.card3.desc': '6 languages - English, French, Urdu, Punjabi, Persian, Tajik',

        'skills.label': 'Skills & Technologies',
        'skills.cloud': 'Cloud & Infrastructure',
        'skills.endpoint': 'Endpoint & Identity',
        'skills.security': 'Security & Governance',
        'skills.web': 'Web & Platform',
        'skills.perf': 'Performance, UX & Analytics',
        'skills.professional': 'Technical & Professional',

        'exp.label': 'Experience',
        'exp.current': 'Current Role',
        'exp.ms.range': 'Feb - Present',
        'exp.ms.title': 'Cloud Solution Architect Intern',
        'exp.allianz.range': 'Sep - Dec',
        'exp.allianz.title': 'Cloud Infrastructure & Deployment Associate',
        'exp.allianz.li1': 'Led endpoint modernization for 140+ users using Autopilot, Azure, and Intune',
        'exp.allianz.li2': 'Strengthened access governance across ServiceNow and Active Directory',
        'exp.allianz.li3': 'Coordinated cross-regional rollout with teams in the UK, Netherlands, and Romania',
        'exp.bridgestone.range': 'Feb - May',
        'exp.bridgestone.title': 'Technology Operations Associate',
        'exp.bridgestone.li1': 'Supported enterprise endpoint modernization using SCCM',
        'exp.bridgestone.li2': 'Automated update workflows and improved deployment stability',
        'exp.bridgestone.li3': 'Optimized hybrid meeting environments (ClickShare, Logitech)',
        'exp.bridgestone.li4': 'Used Excel reporting and scripting for asset and deployment tracking',
        'exp.ptv.range': "Aug '17 - Jun '23",
        'exp.ptv.title': 'Sports Analyst & Commentator',
        'exp.ptv.li1': 'Live football analysis including coverage of the 2018 FIFA World Cup',
        'exp.ptv.li2': 'Delivered broadcasts in English and Urdu to national audiences',
        'exp.such.range': "Jun '18 - Oct '21",
        'exp.such.title': 'Television Presenter',
        'exp.such.li1': 'Anchored 100+ live broadcasts on news and sports',
        'exp.such.li2': 'Produced 50+ written news stories',
        'exp.such.li3': 'Helped launch a flagship sports show',
        'exp.na.range': 'Jul - Sep',
        'exp.na.title': 'Policy & Digital Research Intern',
        'exp.na.li1': 'Supported EV policy proposal using Excel-based modeling',
        'exp.na.li2': 'Worked on citizen engagement digitization initiatives',

        'rec.label': 'Recommendations',
        'rec.quote': '\u201CMuhammad is a very pleasant colleague to work with. He has provided excellent support to me and many other colleagues during an IT migration project and its accompanying challenges. Thank you for the great collaboration!\u201D',
        'rec.role': 'Digital Marketing Manager, Allianz Trade',
        'rec.date': 'November 2025',

        'cert.label': 'Certifications',
        'cert.az900.title': 'Azure Fundamentals',
        'cert.az900.sub': 'AZ-900 \u00B7 Microsoft Certified',
        'cert.csrd.title': 'CSRD Fundamentals',
        'cert.csrd.sub': 'Corporate Sustainability Reporting Directive',
        'cert.az900.modal': 'Microsoft Certified: Azure Fundamentals (AZ-900)',
        'cert.csrd.modal': 'CSRD Fundamentals - Corporate Sustainability Reporting Directive',

        'edu.label': 'Education',
        'edu.msc.type': "Master's Degree",
        'edu.msc.field': 'Political Science',
        'edu.msc.focus': 'European & International Governance',
        'edu.bsc.type': "Bachelor's Degree",
        'edu.bsc.field': 'Political Science',

        'lang.label': 'Languages',
        'lang.en': 'English',
        'lang.en.level': 'Full Professional',
        'lang.fr': 'French',
        'lang.fr.level': 'Full Professional',
        'lang.ur': 'Urdu',
        'lang.ur.level': 'Native',
        'lang.pa': 'Punjabi',
        'lang.pa.level': 'Native',
        'lang.fa': 'Persian',
        'lang.fa.level': 'Native',
        'lang.tg': 'Tajik',
        'lang.tg.level': 'Native',

        'contact.label': "Let's Connect",
        'contact.lead': "I'm always open to conversations about cloud architecture, career opportunities, and interesting projects. Reach out any time.",
        'contact.linkedin': 'LinkedIn Profile',

        'footer': '\u00A9 2026 Syed Muhammad Jaffar Mahdi'
    },

    fr: {
        'nav.home': 'Accueil',
        'nav.about': '\u00C0 propos',
        'nav.skills': 'Comp\u00E9tences',
        'nav.experience': 'Exp\u00E9rience',
        'nav.recommendations': 'Recommandations',
        'nav.certifications': 'Certifications',
        'nav.education': 'Formation',
        'nav.languages': 'Langues',
        'nav.contact': 'Contact',

        'hero.eyebrow': 'Stagiaire Architecte Solutions Cloud \u2014 Microsoft',
        'hero.sub': 'Renforcer la r\u00E9silience cloud, am\u00E9liorer la posture de s\u00E9curit\u00E9 et accompagner les organisations dans leur parcours Azure.',
        'hero.location': 'Bruxelles, Belgique',
        'hero.cta': 'Me contacter',
        'hero.readmore': 'En savoir plus \u2193',

        'about.label': '\u00C0 propos',
        'about.p1': '<strong>Stagiaire Architecte Solutions Cloud chez Microsoft</strong> avec un int\u00E9r\u00EAt pour l\u2019infrastructure cloud, la gouvernance et la r\u00E9silience. Mon parcours combine l\u2019informatique d\u2019entreprise et la modernisation des postes de travail avec la politique du secteur public et la recherche num\u00E9rique, offrant une perspective \u00E9quilibr\u00E9e entre technique et institutionnel sur la transformation cloud.',
        'about.p2': 'Pr\u00E9c\u00E9demment <strong>Stagiaire en Politiques & Recherche Num\u00E9rique \u00E0 l\u2019Assembl\u00E9e Nationale du Pakistan</strong>, j\u2019ai contribu\u00E9 \u00E0 une proposition de politique sur les v\u00E9hicules \u00E9lectriques \u00E0 l\u2019aide de mod\u00E9lisations Excel et soutenu des initiatives de num\u00E9risation de l\u2019engagement citoyen ax\u00E9es sur la prise de d\u00E9cision fond\u00E9e sur les donn\u00E9es.',
        'about.p3': 'Mon exp\u00E9rience ant\u00E9rieure en tant que <strong>pr\u00E9sentateur t\u00E9l\u00E9vis\u00E9 et analyste sportif</strong>, y compris la couverture de la Coupe du Monde FIFA, a d\u00E9velopp\u00E9 une forte capacit\u00E9 \u00E0 communiquer des sujets complexes \u00E0 des publics divers. Passionn\u00E9 par l\u2019aide aux organisations pour moderniser leur infrastructure et prendre des d\u00E9cisions \u00E9clair\u00E9es dans leur parcours cloud.',
        'about.card1.title': 'Domaine',
        'about.card1.desc': 'Infrastructure Cloud & Gouvernance',
        'about.card2.title': 'Formation',
        'about.card2.desc': 'Master & Bachelor Sciences Politiques - VUB & UGent',
        'about.card3.title': 'Langues',
        'about.card3.desc': '6 langues - Anglais, Fran\u00E7ais, Ourdou, Pendjabi, Persan, Tadjik',

        'skills.label': 'Comp\u00E9tences & Technologies',
        'skills.cloud': 'Cloud & Infrastructure',
        'skills.endpoint': 'Postes de travail & Identit\u00E9',
        'skills.security': 'S\u00E9curit\u00E9 & Gouvernance',
        'skills.web': 'Web & Plateforme',
        'skills.perf': 'Performance, UX & Analytique',
        'skills.professional': 'Technique & Professionnel',

        'exp.label': 'Exp\u00E9rience',
        'exp.current': 'Poste actuel',
        'exp.ms.range': 'F\u00E9v - Pr\u00E9sent',
        'exp.ms.title': 'Stagiaire Architecte Solutions Cloud',
        'exp.allianz.range': 'Sep - D\u00E9c',
        'exp.allianz.title': 'Associ\u00E9 Infrastructure Cloud & D\u00E9ploiement',
        'exp.allianz.li1': 'Modernisation des postes de travail pour 140+ utilisateurs avec Autopilot, Azure et Intune',
        'exp.allianz.li2': 'Renforcement de la gouvernance des acc\u00E8s via ServiceNow et Active\u00A0Directory',
        'exp.allianz.li3': 'Coordination du d\u00E9ploiement multir\u00E9gional avec des \u00E9quipes au Royaume-Uni, aux Pays-Bas et en Roumanie',
        'exp.bridgestone.range': 'F\u00E9v - Mai',
        'exp.bridgestone.title': 'Associ\u00E9 Operations Technologiques',
        'exp.bridgestone.li1': 'Support \u00E0 la modernisation des postes de travail avec SCCM',
        'exp.bridgestone.li2': 'Automatisation des flux de mise \u00E0 jour et am\u00E9lioration de la stabilit\u00E9',
        'exp.bridgestone.li3': 'Optimisation des environnements de r\u00E9union hybrides (ClickShare, Logitech)',
        'exp.bridgestone.li4': 'Rapports Excel et scripting pour le suivi des actifs et d\u00E9ploiements',
        'exp.ptv.range': "Ao\u00FB '17 - Juin '23",
        'exp.ptv.title': 'Analyste sportif & Commentateur',
        'exp.ptv.li1': 'Analyse en direct de football, y compris la couverture de la Coupe du Monde FIFA 2018',
        'exp.ptv.li2': 'Pr\u00E9sentations en anglais et ourdou pour des audiences nationales',
        'exp.such.range': "Juin '18 - Oct '21",
        'exp.such.title': 'Pr\u00E9sentateur t\u00E9l\u00E9vis\u00E9',
        'exp.such.li1': 'Animation de 100+ \u00E9missions en direct sur l\u2019actualit\u00E9 et le sport',
        'exp.such.li2': 'R\u00E9daction de 50+ articles d\u2019actualit\u00E9',
        'exp.such.li3': 'Participation au lancement d\u2019une \u00E9mission sportive phare',
        'exp.na.range': 'Juil - Sep',
        'exp.na.title': 'Stagiaire en Politiques & Recherche Num\u00E9rique',
        'exp.na.li1': 'Contribution \u00E0 une proposition de politique VE par mod\u00E9lisation Excel',
        'exp.na.li2': 'Travail sur des initiatives de num\u00E9risation de l\u2019engagement citoyen',

        'rec.label': 'Recommandations',
        'rec.quote': '\u00AB\u00A0Muhammad est un coll\u00E8gue tr\u00E8s agr\u00E9able avec qui travailler. Il m\u2019a apport\u00E9, ainsi qu\u2019\u00E0 de nombreux coll\u00E8gues, un excellent soutien lors d\u2019un projet de migration IT et ses d\u00E9fis. Merci pour cette belle collaboration\u00A0!\u00A0\u00BB',
        'rec.role': 'Responsable Marketing Digital, Allianz Trade',
        'rec.date': 'Novembre 2025',

        'cert.label': 'Certifications',
        'cert.az900.title': 'Azure Fundamentals',
        'cert.az900.sub': 'AZ-900 \u00B7 Certifi\u00E9 Microsoft',
        'cert.csrd.title': 'CSRD Fundamentals',
        'cert.csrd.sub': 'Directive sur les rapports de durabilit\u00E9 des entreprises',
        'cert.az900.modal': 'Certifi\u00E9 Microsoft : Azure Fundamentals (AZ-900)',
        'cert.csrd.modal': 'CSRD Fundamentals - Directive sur les rapports de durabilit\u00E9 des entreprises',

        'edu.label': 'Formation',
        'edu.msc.type': 'Master',
        'edu.msc.field': 'Sciences Politiques',
        'edu.msc.focus': 'Gouvernance Europ\u00E9enne & Internationale',
        'edu.bsc.type': 'Bachelier',
        'edu.bsc.field': 'Sciences Politiques',

        'lang.label': 'Langues',
        'lang.en': 'Anglais',
        'lang.en.level': 'Professionnel complet',
        'lang.fr': 'Fran\u00E7ais',
        'lang.fr.level': 'Professionnel complet',
        'lang.ur': 'Ourdou',
        'lang.ur.level': 'Langue maternelle',
        'lang.pa': 'Pendjabi',
        'lang.pa.level': 'Langue maternelle',
        'lang.fa': 'Persan',
        'lang.fa.level': 'Langue maternelle',
        'lang.tg': 'Tadjik',
        'lang.tg.level': 'Langue maternelle',

        'contact.label': 'Restons en contact',
        'contact.lead': 'Je suis toujours ouvert aux conversations sur l\u2019architecture cloud, les opportunit\u00E9s de carri\u00E8re et les projets int\u00E9ressants. N\u2019h\u00E9sitez pas \u00E0 me contacter.',
        'contact.linkedin': 'Profil LinkedIn',

        'footer': '\u00A9 2026 Syed Muhammad Jaffar Mahdi'
    }
};

// ─── Dark mode toggle ───
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const sunPath = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.innerHTML = theme === 'dark' ? sunPath : moonPath;
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

// Restore saved theme or respect OS preference
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// ─── Language toggle ───
const langToggle = document.getElementById('langToggle');
const langLabel  = langToggle.querySelector('.lang-label');

// Keys whose values contain HTML
const htmlKeys = new Set(['about.p1', 'about.p2', 'about.p3', 'rec.quote']);

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    langLabel.textContent = lang === 'en' ? 'FR' : 'EN';
    langToggle.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (htmlKeys.has(key)) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
}

const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);

langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang || 'en';
    setLanguage(current === 'en' ? 'fr' : 'en');
});

// ─── Navbar scroll effect ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── Slide-out menu ───
const navToggle  = document.getElementById('navToggle');
const navPanel   = document.getElementById('navPanel');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
    navPanel.classList.add('open');
    navOverlay.classList.add('visible');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navPanel.classList.remove('open');
    navOverlay.classList.remove('visible');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
    navPanel.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

// Close menu when a link is clicked
document.querySelectorAll('.nav-panel-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navPanel.classList.contains('open')) closeMenu();
});

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ─── Scroll reveal animations ───
function initReveal() {
    const items = document.querySelectorAll(
        '.highlight-card, .testimonial, .skill-card, .exp-card, .cert-card, .edu-card, .lang-card, .contact-btn, .editorial-block'
    );
    items.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    items.forEach(el => observer.observe(el));
}

// ─── Animate language bars on scroll ───
function initLanguageBars() {
    const bars = document.querySelectorAll('.lang-fill');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetWidth = target.style.width;
                    target.style.width = '0%';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            target.style.width = targetWidth;
                        });
                    });
                    observer.unobserve(target);
                }
            });
        },
        { threshold: 0.3 }
    );
    bars.forEach(bar => observer.observe(bar));
}

// ─── Staggered reveal for grid items ───
function initStagger() {
    const grids = document.querySelectorAll('.skills-grid, .highlight-row, .lang-grid');
    grids.forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, i) => {
            child.style.transitionDelay = `${i * .08}s`;
        });
    });
}

// ─── Hero entrance animation ───
function initHeroAnimation() {
    const portrait = document.querySelector('.hero-portrait');
    const text = document.querySelector('.hero-text');
    if (portrait) {
        portrait.style.opacity = '0';
        portrait.style.transform = 'scale(.9)';
        portrait.style.transition = 'opacity .8s var(--ease), transform .8s var(--ease)';
    }
    if (text) {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        text.style.transition = 'opacity .8s .2s var(--ease), transform .8s .2s var(--ease)';
    }
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (portrait) { portrait.style.opacity = '1'; portrait.style.transform = 'scale(1)'; }
            if (text) { text.style.opacity = '1'; text.style.transform = 'translateY(0)'; }
        });
    });
}

// ─── Typing effect on hero headline ───
function initTypingEffect() {
    const headline = document.getElementById('heroHeadline');
    if (!headline) return;
    const fullHTML = headline.innerHTML;
    // Parse the text nodes for typing (preserve <br>)
    const parts = fullHTML.split(/<br\s*\/?>/i);
    const totalText = parts.join('');
    const totalLen = totalText.length;

    headline.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    headline.appendChild(cursor);

    let charIndex = 0;
    let partIndex = 0;
    let partCharIndex = 0;

    function typeNext() {
        if (partIndex >= parts.length) {
            // Done typing — blink cursor a few times then hide
            setTimeout(() => cursor.classList.add('done'), 400);
            setTimeout(() => { if (cursor.parentNode) cursor.remove(); }, 2800);
            return;
        }
        const currentPart = parts[partIndex];
        if (partCharIndex < currentPart.length) {
            cursor.before(document.createTextNode(currentPart[partCharIndex]));
            partCharIndex++;
            charIndex++;
        } else {
            // Move to next part (add <br>)
            partIndex++;
            partCharIndex = 0;
            if (partIndex < parts.length) {
                cursor.before(document.createElement('br'));
            }
            typeNext();
            return;
        }
        // Variable speed: faster in the middle
        const speed = charIndex < 3 ? 100 : charIndex > totalLen - 3 ? 100 : 55;
        setTimeout(typeNext, speed);
    }

    // Delay start until hero fades in
    setTimeout(typeNext, 900);
}

// ─── Back to top button ───
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── Page fade-in ───
function initPageFadeIn() {
    document.body.classList.remove('page-loading');
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
    initPageFadeIn();
    initReveal();
    initLanguageBars();
    initStagger();
    initHeroAnimation();
    initTypingEffect();
    initBackToTop();
});
