import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <img
                src={project.imageUrl}
                alt={`Imagen de ${project.title}`}
                className={styles.cardImage}
            />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.story}>
                    <p>
                        <strong>El Antes:</strong> {project.before}
                    </p>
                    <p>
                        <strong>Nuestra Misión:</strong> {project.mission}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
