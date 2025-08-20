// src/components/layout/Header.jsx

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={`${styles.headerContent} container`}>
                <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
                    Cebratica
                </Link>

                <div
                    className={`${styles.hamburger} ${
                        isMenuOpen ? styles.open : ''
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav
                    className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
                >
                    <NavLink
                        to="/nosotros"
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                        onClick={closeMobileMenu}
                    >
                        Nosotros
                    </NavLink>
                    <NavLink
                        to="/servicios"
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                        onClick={closeMobileMenu}
                    >
                        Servicios
                    </NavLink>
                    <NavLink
                        to="/portafolio"
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                        onClick={closeMobileMenu}
                    >
                        Portafolio
                    </NavLink>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                        onClick={closeMobileMenu}
                    >
                        Contacto
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
