import React, { useContext } from "react";
import styles from './ActionItem.module.css'
import { Context } from "../../utils/context";

function ActionItem({ todo, toggleTask, removeTask}) {
    let { dispatch } = useContext(Context)

    const handleToggle = (todo) => {
        dispatch({
            type: 'toggle',
            payload: todo.id
        })
    }

    const handleRemove = (todo) => {
        dispatch({
            type: 'remove',
            payload: todo.id
        })
    }

    let textStyle = styles.itemText;
    if (todo.complete) {
        textStyle = textStyle + " " + styles.strike;
    }
    return (
        <div key={todo.id} className={styles.itemTodo}>
            <input type="checkbox" checked={todo.complete} onChange={() => handleToggle(todo)} />
            <div 
                className={textStyle}
                >
                {todo.task}
            </div>
            <button className="item-delete" onClick={() => handleRemove(todo)}>
                Delete
            </button>
        </div>
    );
}

export default ActionItem;