import { useParams } from "react-router-dom"

export const ActionInfo = () => {
    const { actionId } = useParams();
    return (
        <div>
            Action with id {actionId}
        </div>
    )
}