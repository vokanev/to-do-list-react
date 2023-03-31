import React, { useState } from "react";
import ActionButton from "../action_button/ActionButton";
import styles from "./Title.module.css";
import { useTitle } from "../../utils/useTitle";

interface ITitle {
  text: string;
}

const Title: React.FC<ITitle> = (props) => {
  const { text } = props;
  const [headerText, setHeaderText] = useTitle();
  const [isEditing, setIsEditing] = useState(false);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setHeaderText(event.currentTarget.value);
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsEditing(false);
    }
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return !isEditing ? (
    <h1 className={styles.title} onClick={handleClick}>
      {headerText}
    </h1>
  ) : (
    <div className={styles.editBlock}>
      <input
        type="text"
        className={styles.selected}
        value={headerText}
        onChange={handleOnChange}
        onKeyDown={handleKeyPress}
        onBlur={() => setIsEditing(false)}
      />
      <ActionButton onClick={() => setIsEditing(false)}>submit</ActionButton>
    </div>
  );
};

export default Title;
