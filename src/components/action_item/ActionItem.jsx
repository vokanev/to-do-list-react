import React, { useContext } from "react";
import styles from './ActionItem.module.css'

function ActionItem({ todo, toggleTask, removeTask}) {
    let textStyle = styles.itemText;
    if (todo.complete) {
        textStyle = textStyle + " " + styles.strike;
    }
    return (
        <div key={todo.id} className={styles.itemTodo}>
            <input type="checkbox" value={todo.complete} onChange={() => toggleTask(todo.id)} />
            <div 
                className={textStyle}
                >
                {todo.task}
            </div>
            <button className="item-delete" onClick={() => removeTask(todo.id)}>
                Delete
            </button>
        </div>
    );
}

export default ActionItem;