import React, {useState} from 'react';
export const Todos = () => {
    const [todos, setTodos] = useState(['hello', 'react']);
    const ChangeSecondTodo = () => {
        let newArr = [...todos];
        newArr[1] = Math.random();
        setTodos(newArr);
    }
    return (
        <div>
            <h4>
                {todos[0]}
                <br/>
                {todos[1]}
            </h4>
            <button onClick={ChangeSecondTodo}>change second todo</button>
        </div>
    )
}
