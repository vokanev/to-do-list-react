import styles from './ActionButton.module.css'

function ActionButton({ type = 'button', onClick, children }) {
    return (
        <button type={type} className={styles.button} onClick={onClick}>{children}</button>
    )
}

export default ActionButton