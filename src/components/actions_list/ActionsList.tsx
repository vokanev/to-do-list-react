import React from "react";
import { ITodo } from "../../data/ITodo";
import ActionItem from "../action_item/ActionItem";
import styles from "./ActionsList.module.css";

interface IActionsList {
  todos: ITodo[];
  sorting: (action1: ITodo, action2: ITodo) => number;
  filter: string;
}

const ActionsList: React.FC<IActionsList> = (props) => {
  const { todos, sorting, filter } = props;
  const values = filter
    ? todos.filter((todo) =>
        todo.todo.toLowerCase().includes(filter.toLowerCase())
      )
    : todos;
  if (sorting) {
    values.sort(sorting);
  }
  return (
    <div className={styles.list}>
      {values.map((todo) => {
        return <ActionItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ActionsList;
