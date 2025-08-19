import { useState, useEffect } from 'react';
import { getProjects } from '../services/portfolioAPI';
import ProjectCard from '../components/ui/ProjectCard';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error al cargar los proyectos:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading) {
        return (
            <div className="container">
                <p>Cargando proyectos...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Portafolio</h1>
                <p>Una muestra de nuestro trabajo y dedicación.</p>
            </div>
            <div className={styles.portfolioGrid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;
