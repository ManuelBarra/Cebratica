import Button from '../common/Button';
import styles from './PlanCard.module.css';
import { Link } from 'react-router-dom';

const PlanCard = ({
    planNumber,
    title,
    subtitle,
    targetAudience,
    features,
    vibe,
    ctaText,
    isPopular,
}) => {
    const cardClasses = `${styles.card} ${isPopular ? styles.popular : ''}`;

    return (
        <div className={cardClasses}>
            {isPopular && (
                <div className={styles.popularBadge}>Más Popular</div>
            )}
            <div className={styles.cardHeader}>
                <span className={styles.planNumber}>{planNumber}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.cardBody}>
                <p>
                    <strong>Para quién es:</strong> {targetAudience}
                </p>
                <p>
                    <strong>Qué Incluye:</strong>
                </p>
                <ul className={styles.featuresList}>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.vibe}>
                    <strong>La Vibe:</strong> {vibe}
                </p>
                <Link to="/contacto">
                    <Button>{ctaText}</Button>
                </Link>
            </div>
        </div>
    );
};

export default PlanCard;
