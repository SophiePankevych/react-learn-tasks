import React, {useState} from 'react';
export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const IncCounter = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={IncCounter}>inc counter</button>
        </div>
    )
}
