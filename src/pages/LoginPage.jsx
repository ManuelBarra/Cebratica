import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import Button from '../components/common/Button';
import Input from '../components/common/Input'; // Reutilizamos el Input futurista
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'cebratica2025') {
            login();
            navigate('/dashboard');
        } else {
            setError('Credenciales incorrectas. Acceso denegado.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <Link to="/" className={styles.logo}>
                    Cebratica
                </Link>
                <h2 className={styles.title}>Acceso al Laboratorio</h2>
                <p className={styles.subtitle}>
                    Área restringida para clientes y conspiradores.
                </p>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <Input
                        label="Identificador de Agente"
                        name="username"
                        placeholder="Ej: admin"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label="Clave de Acceso"
                        type="password"
                        name="password"
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <Button type="submit">Autenticar</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
