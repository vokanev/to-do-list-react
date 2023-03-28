import React, { useContext } from "react";
import styles from "./ActionItem.module.css";
import { Context } from "../../utils/context";
import ActionButton from "../action_button/ActionButton";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function ActionItem({ todo, toggleTask, removeTask }) {
  let { dispatch } = useContext(Context);
  let navigate = useNavigate();

  const handleToggle = (todo) => {
    axios
      .put("https://dummyjson.com/todos/" + todo.id, {
        completed: !todo.completed,
      })
      .then((res) =>
        dispatch({
          type: "toggle",
          payload: res.data,
        })
      )
      .catch(error => {
        console.log("toggle error");
        dispatch({
          type: "toggle",
          payload: {
            id: todo.id,
            completed: !todo.completed,
            todo: todo.todo
          },
        })
      });
  };

  const handleRemove = () => {
    axios
      .delete("https://dummyjson.com/todos/" + todo.id)
      .then((res) =>
        dispatch({
          type: "remove",
          payload: res.data,
        })
      )
      .catch(error => {
        dispatch({
          type: "remove",
          payload: todo
        })
      })
  };

  const handleInfo = () => {

  }

  let textStyle = styles.itemText;
  if (todo.completed) {
    textStyle = textStyle + " " + styles.strike;
  }
  return (
    <div key={todo.id} className={styles.itemTodo}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo)}
      />
      <div className={textStyle} >{todo.todo}</div>
      <ActionButton onClick={() => navigate(`${todo.id}`)}>Info</ActionButton>
      <ActionButton onClick={handleRemove}>Delete</ActionButton>
    </div>
  );
}

export default ActionItem;
