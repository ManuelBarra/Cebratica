import styles from './Form.module.css';

const Textarea = ({ label, name, placeholder, value, onChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${styles.input} ${styles.textarea}`}
                rows="5"
                required
            ></textarea>
        </div>
    );
};

export default Textarea;
