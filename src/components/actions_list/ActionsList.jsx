import React, { useReducer, useState } from "react";
import ActionItem from "../action_item/ActionItem";

function ActionsList({todos}) {
    return (
    <ul>
        {todos.map(item => <ActionItem key={item.id} {...item} />)}
    </ul>
    )
}

export default ActionsList;