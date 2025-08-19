import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    {/* Rutas Públicas */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/nosotros" element={<AboutPage />} />
                    <Route path="/servicios" element={<ServicesPage />} />
                    <Route path="/portafolio" element={<PortfolioPage />} />
                    <Route path="/contacto" element={<ContactPage />} />

                    {/* Rutas de Autenticación y Dashboard */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
