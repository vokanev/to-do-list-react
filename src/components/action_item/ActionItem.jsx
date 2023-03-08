import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import { Context } from "../../context";

function ActionItem({ title, id, completed }) {
    const { dispatch } = useContext(Context);

    const handleCheckboxChange = (event) => {
        // const isChecked = event.target.checked;
        
        dispatch({ type: 'toggle', payload: id });
    }

    return (
        <li>
            <input
                type='checkbox'
                onChange={ handleCheckboxChange } />
            <span>{title}</span>
            <button onClick={() => dispatch({
                type: "remove",
                payload: id
            })
            }>
                delete
            </button>
        </li>
    );
}

export default ActionItem;