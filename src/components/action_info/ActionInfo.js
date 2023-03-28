import { useParams, useNavigate } from "react-router-dom"

export const ActionInfo = () => {
    const { actionId } = useParams();
    let navigate = useNavigate();
    let item = JSON.parse(localStorage.getItem('todoList')).find(todo => todo.id == actionId);
    return (
        <div>
            {item ?
                `Todo: ${item.todo}`
            : "Not found"
            }
        </div>
    )
}