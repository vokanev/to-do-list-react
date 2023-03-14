import ActionItem from "../action_item/ActionItem";
import styles from './ActionsList.module.css'

function ActionsList({todos}) {
    return (
    <div className={styles.list}>
        {todos.map((todo) => {
            return (
              <ActionItem
              key={todo.id}
              todo={todo}
              />
              )
            })}
    </div>
    )
}

export default ActionsList;