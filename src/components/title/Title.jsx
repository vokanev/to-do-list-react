import React, { useState } from "react";
import ActionButton from "../action_button/ActionButton";
import styles from './Title.module.css';
import { useTitle } from '../../utils/useTitle'

function Title({ text }) {
    const [headerText, setHeaderText] = useTitle();
    const [isEditing, setIsEditing] = useState(false);

    const handleOnChange = (event) => {
        setHeaderText(event.currentTarget.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setIsEditing(false);
        }
    }

    const handleClick = () => {
        setIsEditing(true)
    }

    return (
        !isEditing ?
            <h1 className={styles.title} onClick={handleClick}>{headerText}</h1> :
            <div className={styles.editBlock}>
                <input
                    type='text'
                    className={styles.selected}
                    value={headerText}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyPress}
                    onBlur={() => setIsEditing(false)}
                />
                <ActionButton onClick={() => setIsEditing(false)}>
                    submit
                </ActionButton>
            </div>
    );
}

export default Title;