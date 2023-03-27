import styles from "./EmptyActions.module.scss"
import clipboard from '../../assets/clipboard.svg';

export const EmptyActions = () => {
    return (
        <div className={styles.empty}>
            <img src={clipboard} />
            <span className={styles.label}>You don't have tasks registered yet create tasks and organize your To-Dos</span>
        </div>
    );
}