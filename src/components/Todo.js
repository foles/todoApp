import React from 'react';
import './Todo.css'
const Todo = ({ todos, setTodos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item, isCompleted: true
                    }
                }
                return item
            })
        )
    }
    return (
        <div>
            <li className={`todo-item ${todo.isCompleted ? 'completed' : null}`}>{todo.task}</li>
            <button onClick={completeHandler}>Completed</button>
            <button onClick={deleteHandler}>Deleted</button>

        </div>
    );
}

export default Todo;
