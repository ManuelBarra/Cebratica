import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ quote, author, company }) => {
    return (
        <figure className={styles.card}>
            <blockquote className={styles.quote}>“{quote}”</blockquote>
            <figcaption className={styles.author}>
                <span className={styles.authorName}>{author}</span>
                <cite className={styles.authorCompany}>{company}</cite>
            </figcaption>
        </figure>
    );
};

export default TestimonialCard;
