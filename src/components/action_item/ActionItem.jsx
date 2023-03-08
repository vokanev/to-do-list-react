import React, { useContext } from "react";

function ActionItem({ todo, toggleTask, removeTask}) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <button className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </button>
        </div>
    );
}

export default ActionItem;