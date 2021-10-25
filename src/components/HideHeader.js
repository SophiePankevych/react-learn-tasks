import React, {useState} from 'react';
import {Counter} from "./Counter";
export const HideHeader = () => {
    const [isHeaderVisible,  setIsHeaderVisible] = useState(true);
    const HideHeader = () => {
        setIsHeaderVisible(!isHeaderVisible);
    }
    return (
        <div>
            {isHeaderVisible && <Counter/>}
            <button onClick={HideHeader}>hide header</button>
        </div>
    )
}
