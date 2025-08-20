import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../services/portfolioAPI';
import useAuthStore from '../store/authStore';
import Button from '../components/common/Button';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data);
            setIsLoading(false);
        });
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleDelete = (projectId) => {
        if (window.confirm('¿Estás seguro? Esta acción es irreversible.')) {
            setProjects(projects.filter((p) => p.id !== projectId));
        }
    };

    if (isLoading)
        return <p className="container">Cargando datos del laboratorio...</p>;

    return (
        <div className={`${styles.dashboard} container`}>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1>Panel de Control</h1>
                    <p>Gestiona los trofeos de guerra y experimentos.</p>
                </div>
                <div className={styles.headerActions}>
                    <Button>+ Añadir Proyecto</Button>
                    <button
                        onClick={handleLogout}
                        className={styles.logoutButton}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            <div className={styles.tableContainer}>
                <table className={styles.projectsTable}>
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Descripción</th>
                            <th className={styles.actionsHeader}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>
                                    <div className={styles.projectCell}>
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                        <span>{project.title}</span>
                                    </div>
                                </td>
                                <td className={styles.descriptionCell}>
                                    {project.description || project.mission}
                                </td>
                                <td>
                                    <div className={styles.actionsCell}>
                                        <button
                                            className={`${styles.actionButton} ${styles.edit}`}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(project.id)
                                            }
                                            className={`${styles.actionButton} ${styles.delete}`}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPage;
