import Button from '../components/common/Button';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            'Mensaje enviado. Ahora a esperar la magia. O un email nuestro, que es casi lo mismo.'
        );
    };

    return (
        <div className="container">
            <div className={styles.contactWrapper}>
                <div className={styles.textSection}>
                    <h2>Si llegaste hasta aquí, es una señal.</h2>
                    <p>
                        O estás muy aburrido, o realmente necesitas ayuda. En
                        cualquier caso, estamos listos. Dar el primer paso es lo
                        más difícil. Sobre todo cuando implica admitir que tu
                        web actual es un crimen contra la estética. No te
                        preocupes, hemos visto cosas peores.
                    </p>
                    <p>
                        <strong>Hemos visto muchas cosas peores.</strong>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formSection}>
                    <Button type="submit">[Sí, por favor, ¡sálvenme!]</Button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
