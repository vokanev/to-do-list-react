import React, { useContext } from "react";
import styles from './ActionItem.module.css'
import { Context } from "../../utils/context";
import ActionButton from "../action_button/ActionButton";


function ActionItem({ todo, toggleTask, removeTask}) {
    let { dispatch } = useContext(Context)

    const handleToggle = (todo) => {
        dispatch({
            type: 'toggle',
            payload: todo.id
        })
    }

    const handleRemove = () => {
        dispatch({
            type: 'remove',
            payload: todo.id
        })
    }

    let textStyle = styles.itemText;
    if (todo.completed) {
        textStyle = textStyle + " " + styles.strike;
    }
    return (
        <div key={todo.id} className={styles.itemTodo}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo)} />
            <div 
                className={textStyle}
                >
                {todo.todo}
            </div>
            <ActionButton onClick={handleRemove}>Delete</ActionButton>
            {/* <ActionButton text='Delete' action= {console.log('Delete')} /> */}

        </div>
    );
}

export default ActionItem;