import React, { useState } from "react";

function Items(props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        setIsDone(prevValue => {
            return !prevValue;
        });
    }


    return (
    <div onClick={handleClick}>
        <li style={{textDecoration: isDone ? "line-through" : null}}>{props.text}</li>
    </div>
    );
}

export default Items;