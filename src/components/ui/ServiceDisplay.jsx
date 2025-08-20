import styles from './ServiceDisplay.module.css';

const ServiceDisplay = ({ title, subtitle, description, features }) => {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.cardHeader}>
                <span className={styles.subtitle}>{subtitle}</span>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <p className={styles.description}>{description}</p>
            <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceDisplay;
