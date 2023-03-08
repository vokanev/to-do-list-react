import React, { useState } from "react";

function Title({ text }) {
    const [headerText, setHeaderText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsEditing(false);
        }
    };

    return (
        <h1>
            {headerText}
        </h1>
    );
}

export default Title;