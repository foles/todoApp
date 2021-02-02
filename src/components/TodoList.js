import React from 'react';
import Todo from './Todo'
import './TodoList.css'
const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <div className="App__List">
            <ul>
                {filterTodos.map(todo => (
                    <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
                ))}
            </ul>

        </div>
    );
}

export default TodoList;
