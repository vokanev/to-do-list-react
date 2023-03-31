import React, { useContext, useState } from "react";
import styles from "./AddAction.module.css";
import { Context } from "../../utils/context";
import ActionButton from "../action_button/ActionButton";
import axios from "axios";
import { ActionKind } from "../../utils/reducer";

const AddAction = () => {
  const context = useContext(Context);
  const [userInput, setUserInput] = useState("");

  const addAction = () => {
    axios
      .post("https://dummyjson.com/todos/add", {
        todo: userInput,
        completed: false,
        userId: 5,
      })
      .then((res) =>
        context?.dispatch({
          type: ActionKind.add,
          payload: res.data,
        })
      );
    setUserInput("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserInput(event.currentTarget.value);
  };
  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      addAction();
    }
  };

  return (
    <form className={styles.inputForm} onSubmit={() => addAction()}>
      <input
        className={styles.newActionName}
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <ActionButton onClick={() => addAction()}>Add</ActionButton>
    </form>
  );
};

export default AddAction;
