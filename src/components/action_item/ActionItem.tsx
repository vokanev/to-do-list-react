import React, { useContext } from "react";
import styles from "./ActionItem.module.css";
import { Context } from "../../utils/context";
import ActionButton from "../action_button/ActionButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../../data/ITodo";
import { ActionKind } from "../../utils/reducer";

interface IActionItem {
  todo: ITodo;
}

const ActionItem: React.FC<IActionItem> = (props) => {
  const { todo } = props;

  let context = useContext(Context);
  let navigate = useNavigate();

  const handleToggle = () => {
    axios
      .put("https://dummyjson.com/todos/" + todo.id, {
        completed: !todo.completed,
      })
      .then((res) =>
        context?.dispatch({
          type: ActionKind.toggle,
          payload: res.data,
        })
      )
      .catch((error) => {
        console.log("toggle error");
        context?.dispatch({
          type: ActionKind.toggle,
          payload: {
            id: todo.id,
            completed: !todo.completed,
            todo: todo.todo,
          },
        });
      });
  };

  const handleRemove = () => {
    axios
      .delete("https://dummyjson.com/todos/" + todo.id)
      .then((res) =>
        context?.dispatch({
          type: ActionKind.remove,
          payload: res.data,
        })
      )
      .catch((error) => {
        context?.dispatch({
          type: ActionKind.remove,
          payload: todo,
        });
      });
  };

  const handleInfo = () => {};

  let textStyle = styles.itemText;
  if (todo.completed) {
    textStyle = textStyle + " " + styles.strike;
  }
  return (
    <div key={todo.id} className={styles.itemTodo}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle()}
      />
      <div className={textStyle}>{todo.todo}</div>
      <ActionButton onClick={() => navigate(`${todo.id}`)}>Info</ActionButton>
      <ActionButton onClick={handleRemove}>Delete</ActionButton>
    </div>
  );
};

export default ActionItem;
