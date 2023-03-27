import ActionItem from "../action_item/ActionItem";
import styles from "./ActionsList.module.scss";

function ActionsList({ todos, sorting, filter }) {
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
}

export default ActionsList;
