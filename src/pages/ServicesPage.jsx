import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ServiceDisplay from '../components/ui/ServiceDisplay';
import styles from './ServicesPage.module.css';

// --- DATOS PARA LOS COMPONENTES ---
const brandingService = {
    title: 'Branding y Exorcismo de Marca',
    subtitle: 'El Arte del Diseñador',
    description:
        'Una marca mediocre es un fantasma: invisible y olvidada al instante. No creamos logos, invocamos personalidades. Nos sumergimos en el ADN de tu negocio para darle un rostro, una voz y un alma tan potentes que tus clientes no podrán sacársela de la cabeza.',
    features: [
        'Un logo y sistema visual que se tatúa en la mente de tus clientes.',
        'Una paleta de colores y tipografías que hablan por sí solas.',
        'Una guía de estilo a prueba de becarios para una marca coherente.',
        "El tono de voz que te convierte en 'la única opción'.",
    ],
};

const webDevService = {
    title: 'Desarrollo Web y Alquimia Digital',
    subtitle: 'La Lógica del Programador',
    description:
        'Tener una marca increíble sin una web que la respalde es como tener un Ferrari sin motor. Construimos ese motor. Creamos plataformas rápidas, seguras e intuitivas. Porque un cliente frustrado es un cliente perdido.',
    features: [
        'Un diseño web a medida que convierte tu marca en una experiencia.',
        'Una web a prueba de balas: veloz, segura y perfecta en cualquier pantalla.',
        'Cimientos de SEO técnico para que dejes de jugar al escondite con Google.',
        'Integraciones fluidas con las herramientas que te hacen ganar dinero.',
    ],
};

const ServicesPage = () => {
    return (
        <>
            {/* 1. INTRODUCCIÓN */}
            <section className={`${styles.intro} container`}>
                <h1>Una marca que seduce. Una web que ejecuta.</h1>
                <p>
                    Bienvenido a la zona de guerra. Aquí, el Diseñador insiste
                    en que la belleza lo salvará todo, mientras el Programador
                    argumenta que sin una lógica impecable, todo está perdido.
                    Tienen razón los dos. Hemos convertido su eterno conflicto
                    en tu mayor ventaja competitiva.
                </p>
            </section>

            {/* 2 y 3. SERVICIOS PRINCIPALES */}
            <section className="container">
                <div className={styles.servicesGrid}>
                    <ServiceDisplay {...brandingService} />
                    <ServiceDisplay {...webDevService} />
                </div>
            </section>

            {/* 4. LA OFERTA COMBINADA */}
            <section className={`${styles.fusionSection} container`}>
                <div className={styles.fusionContent}>
                    <h2>El Movimiento Maestro: La Fusión</h2>
                    <p>
                        Esto no es un paquete, es una declaración de
                        intenciones. Es lo que sucede cuando el arte y la lógica
                        conspiran juntos desde el primer boceto. No obtienes una
                        marca y "luego" una web. Obtienes un ecosistema digital
                        nacido para ser coherente, diseñado para dominar y
                        construido para durar.
                    </p>
                    <ul className={styles.fusionBenefits}>
                        <li>
                            <span>+</span> Una Personalidad sin Fisuras
                        </li>
                        <li>
                            <span>+</span> Eficiencia Brutal
                        </li>
                        <li>
                            <span>+</span> Impacto Exponencial
                        </li>
                    </ul>
                </div>
            </section>

            {/* 5. CTA FINAL */}
            <section className={`${styles.finalCta} container`}>
                <div className={styles.ctaBox}>
                    <h2>¿Cuál de tus problemas es más urgente?</h2>
                    <p>
                        Quizás tu marca tiene el pulso débil. O tal vez tu web
                        está en soporte vital. O, como suele ocurrir, necesitas
                        una resurrección completa. Conversemos y te daremos un
                        diagnóstico honesto sobre lo que realmente te urge.
                    </p>
                    <Link to="/contacto">
                        <Button>Pedir Diagnóstico Gratuito</Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
