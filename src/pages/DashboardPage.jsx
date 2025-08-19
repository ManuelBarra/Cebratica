// ESTE ES EL MÁS COMPLEJO
// Para simplificar, no crearemos un ProjectForm.jsx separado, lo incluiremos aquí.
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../services/portfolioAPI'; // Usaremos la misma API simulada
import useAuthStore from '../store/authStore';
import Button from '../components/common/Button';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    // NOTA: En una app real, aquí harías llamadas a una API para
    // crear, actualizar y eliminar proyectos. Como la nuestra es simulada,
    // los cambios se perderán al recargar la página.
    // Esto es suficiente para demostrar la habilidad de manejo de estado en el frontend.

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
        if (
            window.confirm(
                '¿Estás seguro de que quieres eliminar este proyecto?'
            )
        ) {
            setProjects(projects.filter((p) => p.id !== projectId));
            // En una app real: await deleteProjectAPI(projectId);
        }
    };

    if (isLoading) return <p className="container">Cargando dashboard...</p>;

    return (
        <div className={`container ${styles.dashboard}`}>
            <div className={styles.header}>
                <h1>Dashboard de Proyectos</h1>
                <Button onClick={handleLogout} variant="secondary">
                    Cerrar Sesión
                </Button>
            </div>

            {/* <Button>Añadir Nuevo Proyecto</Button>  // La funcionalidad de añadir/editar es un paso extra */}

            <table className={styles.projectsTable}>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Título</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width="100"
                                />
                            </td>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>
                                <div className={styles.actions}>
                                    <Button variant="secondary">Editar</Button>
                                    <Button
                                        onClick={() => handleDelete(project.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardPage;
