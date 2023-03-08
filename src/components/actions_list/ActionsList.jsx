import React, { useReducer, useState } from "react";
import ActionItem from "../action_item/ActionItem";

function ActionsList({todos}) {
    return (
    <div>
        {todos.map(item => <ActionItem key={item.id} {...item} />)}
    </div>
    )
}

export default ActionsList;