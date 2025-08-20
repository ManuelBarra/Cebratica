import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import CaseStudy from '../components/ui/CaseStudy';
import styles from './PortfolioPage.module.css';

// --- DATOS PARA LA PÁGINA ---
const caseStudies = [
    {
        title: 'Alma Botánica',
        diagnosis:
            'Un producto artesanal increíble atrapado en una tienda online genérica que olía a plástico y procesado. Generaba más desconfianza que ventas.',
        treatment:
            'Realizamos un exorcismo de marca completo, creando una identidad visual orgánica y fresca. Luego, construimos una plataforma de e-commerce tan intuitiva y adictiva como sus productos.',
        services: [
            'Branding y Exorcismo de Marca',
            'Desarrollo Web (E-commerce)',
        ],
        imageUrl: '/images/alma-botanica.jpg', // Asegúrate de tener esta imagen en public/images
    },
    {
        title: 'Código Eficaz',
        diagnosis:
            'Genios de la programación con una marca y una web que parecían escritas en binario: solo ellos las entendían y asustaban a los clientes humanos.',
        treatment:
            'Actuamos como traductores de su brillantez. Creamos una identidad de marca potente, directa y profesional, y una web que explica lo que hacen sin necesidad de un doctorado en informática.',
        services: ['Branding y Exorcismo de Marca', 'Desarrollo Web a Medida'],
        imageUrl: '/images/codigo-eficaz.jpg',
    },
    {
        title: 'Café Nómada',
        diagnosis:
            'El mejor café de la ciudad, servido con una identidad visual que sabía a recalentado y una presencia online inexistente.',
        treatment:
            'Diseñamos una experiencia de marca tan artesanal y acogedora como su local. Creamos una web sencilla pero impactante, centrada en contar su historia y guiar a los adictos a la cafeína directamente a su puerta.',
        services: [
            'Branding y Exorcismo de Marca',
            'Desarrollo Web (Landing Page)',
        ],
        imageUrl: '/images/cafe-nomada.jpg',
    },
];

const PortfolioPage = () => {
    return (
        <>
            {/* 1. INTRODUCCIÓN */}
            <section className={`${styles.intro} container`}>
                <h1>Trofeos de Guerra y Experimentos de Laboratorio.</h1>
                <p>
                    No nos gusta la palabra "portfolio". Suena a carpeta de
                    colegio. Esto es más bien una vitrina de batallas ganadas y
                    un vistazo indiscreto a los laboratorios donde forjamos
                    nuestras armas. Cada proyecto es la prueba de que nuestra
                    extraña alianza funciona.
                </p>
            </section>

            {/* 2. CASOS DE ÉXITO */}
            <section className="container">
                {caseStudies.map((project, index) => (
                    <CaseStudy
                        key={project.title}
                        project={project}
                        layout={index % 2 === 0 ? 'right' : 'left'} // Alterna el layout
                    />
                ))}
            </section>

            {/* 3. LABORATORIOS PERSONALES */}
            <section className={`${styles.labsSection} container`}>
                <h2>Los Laboratorios Personales</h2>
                <p className={styles.labsIntro}>
                    Incluso cuando no estamos librando batallas para clientes,
                    no podemos evitarlo. Estos son nuestros campos de
                    entrenamiento. Un vistazo a la locura individual que
                    alimenta nuestro poder colectivo.
                </p>
                <div className={styles.labsGrid}>
                    {/* Laboratorio del Diseñador */}
                    <div className={styles.labCard}>
                        <h3>La Guarida del Diseñador</h3>
                        <h4>[Nombre del Diseñador]</h4>
                        <p>
                            Aquí explora tipografías raras, paletas de colores
                            imposibles y conceptos visuales sin las ataduras de
                            un brief. Advertencia: puede contener arte
                            extrañamente adictivo.
                        </p>
                        <Button>Explorar su locura visual</Button>
                    </div>
                    {/* Laboratorio del Programador */}
                    <div className={styles.labCard}>
                        <h3>El Garaje del Programador</h3>
                        <h4>[Nombre del Programador]</h4>
                        <p>
                            Lleno de proyectos de código, aplicaciones inútiles
                            pero fascinantes y experimentos de rendimiento. Aquí
                            deconstruye internet y lo vuelve a montar, pero
                            mejor.
                        </p>
                        <Button>Inspeccionar sus cacharros</Button>
                    </div>
                </div>
            </section>

            {/* 4. CTA FINAL */}
            <section className={`${styles.finalCta} container`}>
                <div className={styles.ctaBox}>
                    <h2>¿Te apetece convertirte en nuestro próximo trofeo?</h2>
                    <p>
                        Ya has visto de lo que somos capaces. Si estás cansado
                        de tener una marca y una web que no merecen estar en
                        esta página, es probable que tengamos que hablar.
                    </p>
                    <Link to="/contacto">
                        <Button>Quiero mi diagnóstico</Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default PortfolioPage;
