// src/pages/AboutPage.jsx

import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';

// Datos para los valores para mantener el JSX más limpio
const values = [
    {
        title: 'Guerra Total a la Mediocridad',
        description:
            'Si no nos sentimos orgullosos de ello, no te lo entregamos. Fin de la discusión.',
    },
    {
        title: 'Honestidad Brutal (de hermano)',
        description:
            "Te diremos la verdad, aunque duela. No estamos aquí para ser tus 'yes-men'.",
    },
    {
        title: 'Estética con Propósito',
        description:
            "Cada color, forma y animación debe tener una razón de ser. Si es solo para 'verse cool', está fuera.",
    },
    {
        title: 'Código con Alma',
        description:
            'Escribimos código que no solo funciona hoy, sino que está preparado para el futuro. Es nuestro arte invisible.',
    },
];

const AboutPage = () => {
    return (
        <div className={styles.aboutPage}>
            {/* 1. SECCIÓN DE INTRODUCCIÓN / ORIGEN */}
            <section className={`${styles.intro} container`}>
                <h1>
                    Un diseñador y un programador entran en un bar... y fundan
                    una agencia.
                </h1>
                <p className={styles.introText}>
                    Cebratica no nació en una sala de juntas. Nació en una cena
                    familiar, durante una discusión sobre por qué la mayoría de
                    las webs son o (A) preciosas pero inútiles, o (B)
                    funcionales pero más feas que un coche por debajo. Somos dos
                    hermanos que hemos unido nuestros "superpoderes" para acabar
                    con el gran divorcio del mundo digital: el que separa el
                    diseño espectacular de la funcionalidad a prueba de balas.
                </p>
            </section>

            {/* 2. SECCIÓN CONOCE AL DÚO */}
            <section className={`${styles.duo} container`}>
                <h2>Conoce al Dúo Dinámico (o disfuncional, según el día)</h2>
                <div className={styles.duoGrid}>
                    {/* PERFIL 1: DISEÑADOR */}
                    <div className={styles.profileCard}>
                        <div className={styles.profileImagePlaceholder}></div>
                        <span className={styles.profileTitle}>
                            El Artista del Caos
                        </span>
                        <h3 className={styles.profileName}>
                            [Nombre del Diseñador]
                        </h3>
                        <p className={styles.profileQuestion}>
                            El Hermano que se pregunta "¿cómo se siente?"
                        </p>
                        <p>
                            Él es la razón por la que nuestras webs tienen alma.
                            Sufre físicamente al ver un logo pixelado y cree que
                            la tipografía puede cambiar el mundo. Su misión es
                            asegurar que todo lo que creamos no solo se vea
                            bien, sino que provoque una emoción (preferiblemente
                            una que incite a comprar).
                        </p>
                    </div>

                    {/* PERFIL 2: PROGRAMADOR */}
                    <div className={styles.profileCard}>
                        <div className={styles.profileImagePlaceholder}></div>
                        <span className={styles.profileTitle}>
                            El Arquitecto del Orden
                        </span>
                        <h3 className={styles.profileName}>
                            [Nombre del Programador]
                        </h3>
                        <p className={styles.profileQuestion}>
                            El Hermano que se pregunta "¿cómo funciona?"
                        </p>
                        <p>
                            Él es el motivo por el que nuestras webs no se caen
                            a pedazos. Un sitio que tarda más de 2s en cargar es
                            una ofensa moral para él. Su trabajo es la magia
                            invisible que hace que el arte de su hermano
                            funcione de manera impecable, rápida y segura.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. SECCIÓN DE FILOSOFÍA */}
            <section className={`${styles.philosophy} container`}>
                <h2>El Tratado de Paz entre el Arte y la Lógica</h2>
                <div className={styles.philosophyContent}>
                    <blockquote>
                        El diseño sin una estrategia sólida es solo decoración.
                    </blockquote>
                    <blockquote>
                        La programación sin una experiencia de usuario cuidada
                        es solo un montón de código.
                    </blockquote>
                    <p>
                        En Cebratica, cada decisión de diseño está respaldada
                        por una lógica de programación, y cada línea de código
                        está escrita para dar vida a una visión creativa. Es
                        nuestra garantía de que el resultado final es una
                        herramienta de negocio poderosa, bella y endiabladamente
                        eficaz.
                    </p>
                </div>
            </section>

            {/* 4. SECCIÓN DE VALORES */}
            <section className={`${styles.values} container`}>
                <h2>El Pacto de Hermanos (Nuestros Valores Innegociables)</h2>
                <div className={styles.valuesGrid}>
                    {values.map((value) => (
                        <div key={value.title} className={styles.valueCard}>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. SECCIÓN DE CONCLUSIÓN Y CTA */}
            <section className={`${styles.conclusion} container`}>
                <p className={styles.conclusionText}>
                    Así que sí, somos dos hermanos. Uno hace que las cosas se
                    vean increíbles, el otro hace que funcionen de forma
                    impecable. Juntos, hacemos que tu negocio crezca.
                </p>
                <Link to="/contacto" className={styles.ctaLink}>
                    ¿Listo para que los dos lados de nuestro cerebro trabajen
                    para ti?
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;
