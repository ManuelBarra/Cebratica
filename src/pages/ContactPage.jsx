import { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Textarea from '../components/common/Textarea';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Aún no lo sé, ¡necesito ayuda!',
        message: '',
    });

    const serviceOptions = [
        'Necesito un exorcismo de marca (Branding)',
        'Mi web necesita una cirugía urgente (Desarrollo Web)',
        'Quiero el tratamiento completo (Marca + Web)',
        'Aún no lo sé, ¡necesito ayuda!',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío (ej: EmailJS, Formspree, etc.)
        console.log('Formulario enviado:', formData);
        alert(
            '¡Mensaje recibido! Pronto tendrás noticias de nuestro equipo de rescate.'
        );
        setFormData({
            name: '',
            email: '',
            service: 'Aún no lo sé, ¡necesito ayuda!',
            message: '',
        });
    };

    return (
        <>
            <section className={`${styles.intro} container`}>
                <h1>La Consulta.</h1>
                <p>(No te preocupes, no tenemos diván).</p>
            </section>

            <div className={`${styles.mainLayout} container`}>
                {/* Columna Izquierda: Formulario */}
                <div className={styles.formSection}>
                    <p className={styles.formIntro}>
                        Has llegado hasta aquí. Cuéntanos sobre tu proyecto: tus
                        ambiciones, tus miedos... Uno de los dos hermanos leerá
                        tu mensaje y te contactará para agendar un diagnóstico
                        inicial. Sin compromiso. Sin ventas de humo.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.contactForm}
                    >
                        <Input
                            label="Tu Nombre"
                            name="name"
                            placeholder="Ej: Alex Domínguez"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            label="Tu Email (Donde enviaremos el plan de rescate)"
                            type="email"
                            name="email"
                            placeholder="Ej: alex@miempresa.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Select
                            label="¿Cuál es el motivo de tu consulta?"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            options={serviceOptions}
                        />
                        <Textarea
                            label="Cuéntanos tu historia"
                            name="message"
                            placeholder="Hola, mi web actual la hizo mi primo y mis clientes huyen..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <Button type="submit">Enviar para Diagnóstico</Button>
                    </form>
                </div>

                {/* Columna Derecha: Qué Esperar */}
                <aside className={styles.processSection}>
                    <div className={styles.processBox}>
                        <h2>¿Y ahora qué? El plan de ataque.</h2>
                        <ol className={styles.processList}>
                            <li>
                                Recibiremos tu mensaje. Probablemente gritaremos
                                "¡Tenemos un caso!".
                            </li>
                            <li>
                                Analizaremos tu situación con café en mano y te
                                responderemos en menos de 48h hábiles.
                            </li>
                            <li>
                                Agendaremos una videollamada de 30 min para el
                                diagnóstico inicial. Gratis, por supuesto.
                            </li>
                            <li>
                                Si no somos los indicados, te lo diremos.
                                Odiamos perder el tiempo.
                            </li>
                        </ol>
                    </div>
                </aside>
            </div>

            {/* Sección Final: Contacto Alternativo */}
            <section className={`${styles.alternativeContact} container`}>
                <h2>¿Odias los formularios con toda tu alma?</h2>
                <p>
                    Te entendemos. Si lo tuyo no son los formularios o tienes
                    una propuesta de colaboración, puedes escribirnos
                    directamente a:
                </p>
                <a
                    href="mailto:hola@cebratica.com"
                    className={styles.emailLink}
                >
                    hola@cebratica.com
                </a>
                <p className={styles.disclaimer}>
                    (Para nuevos proyectos, te agradeceríamos que usaras el
                    formulario. Nos ayuda a mantener el orden en nuestro caos
                    creativo).
                </p>
            </section>
        </>
    );
};

export default ContactPage;
