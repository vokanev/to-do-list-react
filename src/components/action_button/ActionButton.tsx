import React, { ReactNode } from "react";
import styles from "./ActionButton.module.css";

interface IActionButton {
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => any;
  children: ReactNode;
}

const ActionButton: React.FC<IActionButton> = (props) => {
  const { type = "button", onClick, children } = props;
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
