import styles from './Form.module.css';

const Select = ({ label, name, value, onChange, options }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <div className={styles.selectWrapper}>
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={styles.select}
                    required
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;
