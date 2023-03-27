import styles from "./Checkbox.module.scss"
const Checkbox = ({ label, checked, onChange, ...props }) => {
    console.log(checked)
    let classes = checked ? 
    `${styles.checkboxWrapper} ${styles.checked}`
    : styles.checkboxWrapper
  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange()}
          className={checked ? "checked" : ""}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
