import React, { useState } from "react";
import styles from './Title.module.css';

function Title({ text }) {
    const [headerText, setHeaderText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);


    return (
        <h1 className={styles.title}>
            {headerText}
        </h1>
    );
}

export default Title;