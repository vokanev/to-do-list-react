import styles from './StatisticsItem.module.scss'

export const StatisticsItem = ({label, completed, total, className}) => {
    let statistics = completed ? `${completed} of ${total}` : total
    return (
        <div className={styles.content}>
            <span className={ className === 'totalAction'? styles.totalAction : styles.completed}>{label}</span>
            <span className={styles.counter}>{statistics}</span>
        </div>
    );
}