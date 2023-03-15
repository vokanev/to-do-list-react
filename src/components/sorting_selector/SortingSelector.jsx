import {Context} from '../../utils/context';
import { useContext, useState } from 'react';

function SortingSelector({onChange}) {
    const {dispatch} = useContext(Context);
    const [sorting, setSorting] = useState(null);

    const handleChangeSorting = (event) => {
        dispatch({
            type: 'sorting',
            payload: event.target.value
        })
    }

    return (
        <select onChange={handleChangeSorting}>
            <option value="todoFirst">To do first</option>
            <option value="doneFirst">Done first</option>
            <option value="alphabetically">Alphabetically</option>
            <option value='reverseAlphabetically'>Reverse alphabetically</option>
        </select>
    )
}

export default SortingSelector;