import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import Button from '../components/common/Button';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Credenciales "hardcodeadas" para el ejemplo
        if (username === 'admin' && password === 'cebratica2025') {
            login();
            navigate('/dashboard');
        } else {
            setError('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2>Acceso al Dashboard</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <Button type="submit">Iniciar Sesión</Button>
            </form>
        </div>
    );
};

export default LoginPage;
