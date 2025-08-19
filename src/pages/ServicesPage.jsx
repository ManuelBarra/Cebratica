import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import PlanCard from '../components/ui/PlanCard';
import styles from './ServicesPage.module.css';

// Datos de los planes para mantener el código JSX limpio y organizado
const battlePlans = [
    {
        planNumber: 'Plan 1',
        title: 'El Despegue Digital',
        subtitle: 'El Kit de Supervivencia para dejar de dar vergüenza online.',
        targetAudience:
            "El emprendedor valiente que necesita un paracaídas digital... urgentemente. O cualquiera cuya web actual fue hecha por un familiar en 2010 como un 'favor'.",
        features: [
            'Diseño profesional a partir de una base sólida y personalizada.',
            'Hasta 5 páginas estratégicas (Inicio, Nosotros, Servicios, etc.).',
            'Adaptable a móviles y tablets (porque es 2025).',
            'Formulario de contacto funcional.',
            'Entrega rápida para ponerte en el mapa digital YA.',
        ],
        vibe: 'Profesional, rápido y directo al grano.',
        ctaText: 'Lo Necesito YA',
        isPopular: false,
    },
    {
        planNumber: 'Plan 2',
        title: 'La Máquina de Negocio',
        subtitle:
            'Nuestra opción más popular. Convierte visitantes en clientes.',
        targetAudience:
            'El negocio que ya no juega en el patio y quiere sentarse en la mesa de los adultos. Para empresas que buscan generar leads y hacer que su competencia sude frío.',
        features: [
            'Todo lo del Despegue Digital, Y ADEMÁS:',
            'Diseño 100% a medida y exclusivo, creado desde cero.',
            'Arquitectura web pensada para la conversión.',
            'Blog integrado y optimizado para que Google te quiera.',
            'Fundamentos de SEO técnico para que te encuentren.',
            'Integración con tus herramientas de marketing (Mailchimp, CRM, etc.).',
        ],
        vibe: 'Estratégico, potente y orientado a resultados.',
        ctaText: 'Quiero esta Máquina',
        isPopular: true,
    },
    {
        planNumber: 'Plan 3',
        title: 'El Imperio Online',
        subtitle: 'La solución a medida para los que no se conforman con poco.',
        targetAudience:
            'Los visionarios, los inconformistas y las empresas con necesidades complejas que quieren una plataforma que haga de todo menos el café (estamos en ello).',
        features: [
            'Todo lo de la Máquina de Negocio, Y ADEMÁS:',
            'Funcionalidades a la carta: E-commerce, reservas, área de miembros...',
            'Tienda online a prueba de adictos a las compras.',
            'Optimización de rendimiento avanzada para que tu web vuele.',
            'Consultoría estratégica incluida.',
            'Soporte prioritario (los emperadores no hacen cola).',
        ],
        vibe: 'Ilimitado, a medida y absolutamente dominante.',
        ctaText: 'Construir mi Imperio',
        isPopular: false,
    },
];

const ServicesPage = () => {
    return (
        <>
            {/* 1. INTRODUCCIÓN */}
            <section className={`${styles.intro} container`}>
                <h1>No vendemos webs. Vendemos armas de conquista digital.</h1>
                <p className={styles.introText}>
                    Bienvenido a nuestro arsenal. Aquí, el Diseñador y el
                    Programador han forjado tres soluciones para tres batallas
                    diferentes. Elige tu arma. Nosotros nos encargamos de que dé
                    en el blanco.
                </p>
            </section>

            {/* 2. PLANES DE BATALLA */}
            <section className={`${styles.plans} container`}>
                <div className={styles.plansGrid}>
                    {battlePlans.map((plan) => (
                        <PlanCard key={plan.title} {...plan} />
                    ))}
                </div>
            </section>

            {/* 3. SECCIÓN DE BRANDING */}
            <section className={styles.brandingSection}>
                <div className="container">
                    <h2>Un momento... ¿Y mi marca?</h2>
                    <p>
                        Una web increíble con un logo horrible es como un
                        Ferrari con tapacubos de plástico. Simplemente no
                        funciona. Si aún no tienes una identidad visual sólida,
                        no te preocupes. Ofrecemos servicios de{' '}
                        <strong>Branding y Exorcismo de Marca</strong>. Podemos
                        empezar por ahí. Pregúntanos por nuestros paquetes
                        combinados.
                    </p>
                </div>
            </section>

            {/* 4. CTA FINAL */}
            <section className={`${styles.finalCta} container`}>
                <h2>¿No sabes qué plan es para ti?</h2>
                <p>
                    Es normal. No te venderemos un tanque para una pelea de
                    almohadas. Conversemos, cuéntanos tu proyecto y te daremos
                    un diagnóstico honesto sobre el arma que realmente
                    necesitas.
                </p>
                <Link to="/contacto">
                    <Button>Pide tu Diagnóstico Gratuito</Button>
                </Link>
            </section>
        </>
    );
};

export default ServicesPage;
