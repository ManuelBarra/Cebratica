import styles from './CaseStudy.module.css';

const CaseStudy = ({ project, layout = 'right' }) => {
    const layoutClass =
        layout === 'left' ? styles.layoutLeft : styles.layoutRight;

    return (
        <div className={`${styles.caseStudy} ${layoutClass}`}>
            <div className={styles.imagePlaceholder}>
                {/* Aquí iría la imagen o video del proyecto */}
                <img
                    src={project.imageUrl}
                    alt={`Imagen de ${project.title}`}
                />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.title}>{project.title}</h2>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>El Diagnóstico</h3>
                    <p>{project.diagnosis}</p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>El Tratamiento</h3>
                    <p>{project.treatment}</p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Servicios Aplicados</h3>
                    <div className={styles.servicesTags}>
                        {project.services.map((service) => (
                            <span key={service} className={styles.tag}>
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
