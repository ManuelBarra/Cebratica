import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import TestimonialCard from '../components/ui/TestimonialCard';
import styles from './HomePage.module.css';

// Datos para los testimonios para mantener el JSX limpio
const testimonials = [
    {
        quote: 'Antes de Cebratica, mi web era el lugar donde las ventas iban a morir. Ahora es mi mejor empleada: trabaja 24/7 y convierte visitantes en clientes mientras duermo. ¡Brujería!',
        author: 'Sofía L.',
        company: 'Fundadora de "Alma Botánica"',
    },
    {
        quote: 'Odiaba mi logo con cada fibra de mi ser. Ellos no solo crearon uno que amo, sino que construyeron toda una identidad visual que por fin hace justicia a mi trabajo.',
        author: 'Javier R.',
        company: 'CEO de "Código Eficaz"',
    },
    {
        quote: 'El proceso fue tan claro que pensé que había una trampa. No la hubo. El resultado final superó todas mis expectativas. 10/10, volvería a sufrir una crisis de marca solo para que ellos la arreglen.',
        author: 'Martina G.',
        company: 'Propietaria de "Café Nómada"',
    },
];

const HomePage = () => {
    return (
        <>
            {/* 1. SECCIÓN DE HÉROE */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>
                        Tu marca es genial. Lástima que tu web parezca de 2003.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Seamos honestos: una mala primera impresión digital es
                        como ir a una cita con una mancha de kétchup en la
                        camisa. Irreparable.
                    </p>
                    <Link to="/contacto">
                        <Button>[Arreglemos ese desastre.]</Button>
                    </Link>
                </div>
            </section>

            {/* 2. EL PROBLEMA */}
            <section className={styles.problem}>
                <div className="container">
                    <h2>¿Tu presencia online te está matando el negocio?</h2>
                    <p className={styles.sectionIntro}>
                        Tu web y tu marca no son entes pasivos. O están
                        trabajando para ti o están conspirando activamente en tu
                        contra. Identifica las señales de una traición digital
                        inminente:
                    </p>
                    <div className={styles.problemGrid}>
                        <div className={styles.problemCard}>
                            <h3>Tus clientes se pierden</h3>
                            <p>
                                Tu web es un laberinto sin salida. Los
                                visitantes entran, se frustran y desaparecen
                                para siempre.
                            </p>
                        </div>
                        <div className={styles.problemCard}>
                            <h3>Generas desconfianza</h3>
                            <p>
                                Un diseño anticuado grita "no somos
                                profesionales". Es el equivalente digital a una
                                oficina sucia.
                            </p>
                        </div>
                        <div className={styles.problemCard}>
                            <h3>Eres invisible para Google</h3>
                            <p>
                                Tu SEO es tan inexistente que si quisieras
                                esconder un cadáver, la segunda página de Google
                                sería el lugar perfecto.
                            </p>
                        </div>
                        <div className={styles.problemCard}>
                            <h3>Pides perdón por tu web</h3>
                            <p>
                                "La web está un poco vieja, pero...". Si tienes
                                que justificar tu propia marca, la batalla ya
                                está perdida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. LA SOLUCIÓN */}
            <section className={styles.solution}>
                <div className="container">
                    <h2>
                        No hacemos "diseñitos". Provocamos transformaciones.
                    </h2>
                    <p className={styles.sectionIntro}>
                        No creemos en las curitas. Creemos en la cirugía mayor.
                        Nuestro proceso está diseñado para que tu marca salga
                        del quirófano lista para correr una maratón.
                    </p>
                    <div className={styles.solutionGrid}>
                        <div className={styles.solutionCard}>
                            {/* Para los íconos, puedes usar una librería como `react-icons` */}
                            <h3>Diagnóstico Brutalmente Honesto</h3>
                            <p>
                                Analizamos tu marca sin piedad. Te diremos lo
                                que apesta y por qué estás perdiendo dinero.
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>Cirugía Estética Digital</h3>
                            <p>
                                Rediseñamos tu identidad y tu web asegurando que
                                cada píxel tenga un propósito: atraer y
                                convertir.
                            </p>
                        </div>
                        <div className={styles.solutionCard}>
                            <h3>Rehabilitación para la Conversión</h3>
                            <p>
                                Nos aseguramos de que funcione como una máquina.
                                Comprarte será fácil, intuitivo y hasta
                                placentero.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BENEFICIOS CLAVE */}
            <section className={styles.benefits}>
                <div className="container">
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            Diseños que tus competidores odiarán (de envidia).
                        </div>
                        <div className={styles.benefitItem}>
                            Cero jerga insufrible. Solo resultados y café.
                        </div>
                        <div className={styles.benefitItem}>
                            Funcionalidad a prueba de catástrofes (y de
                            abuelas).
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRUEBA SOCIAL */}
            <section className={styles.socialProof}>
                <div className="container">
                    <h2>
                        Clientes que vinieron buscando un milagro (y más o menos
                        lo encontraron).
                    </h2>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CALIFICACIÓN */}
            <section className={styles.qualification}>
                <div className="container">
                    <h2>No somos para todos. ¿Somos compatibles?</h2>
                    <div className={styles.qualificationGrid}>
                        <div className={styles.dos}>
                            <h3>Hablemos si...</h3>
                            <ul>
                                <li>
                                    ✅ Valoras el diseño como una inversión, no
                                    un gasto.
                                </li>
                                <li>
                                    ✅ Entiendes que "barato y rápido" significa
                                    "malo y caro".
                                </li>
                                <li>
                                    ✅ Tienes sentido del humor y no te asusta
                                    la honestidad.
                                </li>
                                <li>
                                    ✅ Estás listo para delegar y confiar en
                                    expertos obsesivos.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.donts}>
                            <h3>Mejor no nos llames si...</h3>
                            <ul>
                                <li>
                                    ❌ Crees que tu sobrino de 15 años puede
                                    hacerlo "casi igual".
                                </li>
                                <li>
                                    ❌ Tu frase favorita es "tengo unos cambios
                                    más...".
                                </li>
                                <li>
                                    ❌ Necesitas la aprobación de un comité de
                                    12 personas.
                                </li>
                                <li>
                                    ❌ Buscas un ejecutor de órdenes en lugar de
                                    un socio.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA FINAL */}
            <section className={styles.finalCta}>
                <div className="container">
                    <h2>La decisión es tuya.</h2>
                    <p>
                        Puedes cerrar esta ventana y seguir viviendo en un
                        estado de negación digital. O puedes tomar la decisión
                        inteligente. La que tu negocio te está suplicando que
                        tomes.
                    </p>
                    <Link to="/contacto">
                        <Button>[Quiero arreglar este desastre.]</Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
