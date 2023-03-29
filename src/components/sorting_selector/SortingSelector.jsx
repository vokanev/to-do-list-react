import {Context} from '../../utils/context';
import { useContext } from 'react';

function SortingSelector({onChange, value}) {
    const {dispatch} = useContext(Context);

    const handleChangeSorting = (event) => {
        onChange(event.target.value)
    }

    return (
        <select onChange={handleChangeSorting} value={value}>
            <option value="NoSorting">No sorting</option>
            <option value="todoFirst">To do first</option>
            <option value="doneFirst">Done first</option>
            <option value="alphabetically">Alphabetically</option>
            <option value='reverseAlphabetically'>Reverse alphabetically</option>
        </select>
    )
}

export default SortingSelector;