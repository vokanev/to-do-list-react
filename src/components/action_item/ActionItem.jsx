import React, { useContext, useState } from "react";
import styles from "./ActionItem.module.scss";
import { Context } from "../../utils/context";
import axios from 'axios'
import trash from '../../assets/trash.svg';
import trashHover from '../../assets/trash_hover.svg';
import Checkbox from "../checkbox/Checkbox";

function ActionItem({ todo, toggleTask, removeTask }) {
  let { dispatch } = useContext(Context);
  let [isDeleteHovered, setIsDeleteHovered] = useState(false);
  let [isChecked, setIsChecked] = useState(todo.checked);

  const handleToggle = (todo) => {
    axios
      .put("https://dummyjson.com/todos/" + todo.id, {
        completed: !todo.completed,
      })
      .then((res) => {
      setIsChecked(!isChecked)
        dispatch({
          type: "toggle",
          payload: res.data,
        })}
      )
      .catch(error => {
        console.log("toggle error");
        setIsChecked(!isChecked)
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
  console.log(`${JSON.stringify(todo)}`)
  let textStyle = styles.itemText;
  if (todo.completed) {
    textStyle = textStyle + " " + styles.strike;
  }
  return (
    <div key={todo.id} className={styles.itemTodo}>
      <Checkbox 
        checked={todo.completed}
        onChange={() => handleToggle(todo)}
      />
      <div className={textStyle} >{todo.todo}</div>
      <button className={styles.removeTask} onClick={handleRemove} onMouseOver={()=> setIsDeleteHovered(true)} onMouseOut={()=>setIsDeleteHovered(false)}>
        <img src={isDeleteHovered ? trashHover : trash} />
      </button>
    </div>
  );
}

export default ActionItem;
