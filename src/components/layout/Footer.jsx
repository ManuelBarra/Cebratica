import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p>
                    &copy; {currentYear} Cebratica. Todos los derechos
                    reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
