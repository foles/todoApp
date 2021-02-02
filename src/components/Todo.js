import React from 'react';
import './Todo.css'
import checkIcon from '../assets/icon-check.svg'
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
        <div className="App__todo">
            <div className="todo__task">
                <span onClick={completeHandler} className={`todo__check ${todo.isCompleted ? 'checkCompleted' : null}`}><img src={checkIcon} /></span>
                <li className={`todo__item ${todo.isCompleted ? 'completed' : null}`}>{todo.task}</li>
            </div>
            <span onClick={deleteHandler} className="todo__cross"></span>


        </div>
    );
}

export default Todo;
