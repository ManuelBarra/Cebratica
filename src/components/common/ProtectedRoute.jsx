import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuthStore();

    if (!isAuthenticated) {
        // Si el usuario no está autenticado, redirige a la página de login
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
