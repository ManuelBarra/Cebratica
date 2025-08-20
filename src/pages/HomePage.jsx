import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import TestimonialCard from '../components/ui/TestimonialCard';
import styles from './HomePage.module.css';

// Testimonios (funcionan perfectamente con el flujo de la página)
const testimonials = [
    {
        quote: 'Antes de Cebratica, mi web era el lugar donde las ventas iban a morir. Ahora es mi mejor empleada: trabaja 24/7, no se queja y convierte visitantes en clientes mientras duermo. ¡Brujería!',
        author: 'Sofía L.',
        company: 'Fundadora de "Alma Botánica"',
    },
    {
        quote: "Odiaba mi logo con cada fibra de mi ser. Ellos no solo crearon uno que amo, sino que construyeron toda una identidad visual que por fin hace justicia a mi trabajo. Pasé de 'emprendedor' a 'empresario serio' de la noche a la mañana.",
        author: 'Javier R.',
        company: 'CEO de "Código Eficaz"',
    },
];

const HomePage = () => {
    return (
        <>
            {/* 1. SECCIÓN DE HÉROE */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>
                        Tu negocio es increíble. Lástima que se vea del 2003.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Seamos honestos. Una marca débil y una web obsoleta son
                        el dúo tóxico que espanta a los clientes. Nosotros somos
                        el antídoto. Somos los hermanos de Cebratica. Uno diseña
                        marcas que enamoran. El otro construye webs que
                        funcionan. Juntos, creamos presencias digitales tan
                        profesionales y efectivas que tus clientes no tendrán
                        más remedio que tomarte en serio.
                    </p>
                    <Link to="/contacto">
                        <Button>[Arreglemos ese doble desastre.]</Button>
                    </Link>
                </div>
            </section>

            {/* 2. EL PROBLEMA */}
            <section className="container">
                <h2>
                    ¿Tu presencia digital te está costando clientes? Síntomas
                    comunes.
                </h2>
                <div className={styles.problemGrid}>
                    <div className={styles.glassCard}>
                        <h3>Generas desconfianza</h3>
                        <p>
                            Un logo de aficionado o una web anticuada gritan "no
                            somos profesionales" y generan la misma confianza
                            que un cirujano con herramientas oxidadas.
                        </p>
                    </div>
                    <div className={styles.glassCard}>
                        <h3>Sufres de personalidad múltiple</h3>
                        <p>
                            Tu logo dice una cosa, tu Instagram otra y tu web
                            vive en una galaxia completamente diferente. Esta
                            incoherencia confunde y aleja a tus clientes.
                        </p>
                    </div>
                    <div className={styles.glassCard}>
                        <h3>Tu web es un laberinto</h3>
                        <p>
                            Los visitantes entran, se frustran intentando
                            encontrar algo y huyen para siempre, probablemente a
                            la web funcional y clara de tu competencia.
                        </p>
                    </div>
                    <div className={styles.glassCard}>
                        <h3>Pides perdón por tu marca</h3>
                        <p>
                            Si antes de compartir tu enlace tienes que decir "el
                            logo no nos hace justicia, pero el producto es
                            bueno...", la batalla ya está perdida.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. LA SOLUCIÓN */}
            <section className={`${styles.solution} container`}>
                <h2>No hacemos "diseñitos". Forjamos imperios digitales.</h2>
                <p className={styles.sectionIntro}>
                    No creemos en las curitas. Creemos en la cirugía mayor.
                    Nuestro proceso está diseñado para aplicar un tratamiento
                    doble: primero resucitamos el alma de tu marca, y luego le
                    construimos un hogar digital a prueba de balas.
                </p>
                <div className={styles.solutionGrid}>
                    <div className={styles.glassCard}>
                        <span className={styles.solutionSubtitle}>
                            El Arte del Diseñador
                        </span>
                        <h3>Exorcismo de Marca</h3>
                        <p>
                            Nos sumergimos en tu negocio para entender qué lo
                            hace único. Sacamos su alma y la convertimos en una
                            identidad visual memorable: un logo, colores y una
                            voz que tus clientes recordarán.
                        </p>
                    </div>
                    <div className={styles.glassCard}>
                        <span className={styles.solutionSubtitle}>
                            La Lógica del Programador
                        </span>
                        <h3>Alquimia Digital</h3>
                        <p>
                            Después, transformamos esa brillante identidad en un
                            sitio web veloz, intuitivo y que funciona a la
                            perfección en cualquier dispositivo. Una máquina
                            diseñada para convertir visitantes curiosos en
                            clientes leales.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. BENEFICIOS CLAVE */}
            <section className="container">
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitItem}>
                        Una marca y web que tus competidores odiarán.
                    </div>
                    <div className={styles.benefitItem}>
                        Cero jerga insufrible. Solo resultados.
                    </div>
                    <div className={styles.benefitItem}>
                        Funcionalidad a prueba de catástrofes.
                    </div>
                </div>
            </section>

            {/* 5. PRUEBA SOCIAL */}
            <section className="container">
                <h2>
                    Clientes que vinieron buscando un milagro (y más o menos lo
                    encontraron).
                </h2>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </section>

            {/* 6. CALIFICACIÓN */}
            <section className={`${styles.qualification} container`}>
                <h2>No somos para todos. Averigüemos si somos compatibles.</h2>
                <div className={styles.qualificationGrid}>
                    <div className={styles.dos}>
                        <h3>Hablemos si...</h3>
                        <ul>
                            <li>
                                ✅ Valoras la estrategia como una inversión, no
                                como un gasto.
                            </li>
                            <li>
                                ✅ Entiendes que "barato y rápido" casi siempre
                                significa "malo y caro a la larga".
                            </li>
                            <li>
                                ✅ Tienes sentido del humor y no te asusta la
                                honestidad.
                            </li>
                            <li>
                                ✅ Estás listo para delegar y confiar en un
                                equipo de expertos obsesivos.
                            </li>
                        </ul>
                    </div>
                    <div className={styles.donts}>
                        <h3>Mejor no nos llames si...</h3>
                        <ul>
                            <li>
                                ❌ Crees que tu sobrino de 15 años puede hacerlo
                                "casi igual".
                            </li>
                            <li>
                                ❌ Tu frase favorita es "tengo unos cambios más,
                                pero son pequeños".
                            </li>
                            <li>
                                ❌ Necesitas que todo esté aprobado por un
                                comité de 12 personas.
                            </li>
                            <li>
                                ❌ Buscas un simple ejecutor de órdenes en lugar
                                de un socio estratégico.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section className={`${styles.finalCta} container`}>
                <div className={styles.glassCard}>
                    <h2>La decisión es tuya.</h2>
                    <p>
                        Puedes cerrar esta ventana y seguir viviendo con una
                        marca que no te representa y una web que te hace perder
                        dinero. O puedes tomar la decisión inteligente. La que
                        tu negocio te está suplicando que tomes.
                    </p>
                    <Link to="/contacto">
                        <Button>[Quiero arreglar mi desastre.]</Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
