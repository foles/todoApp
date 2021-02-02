import React from 'react';
import Todo from './Todo'
const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <div>
            <ul>
                {filterTodos.map(todo => (
                    <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
                ))}
            </ul>

        </div>
    );
}

export default TodoList;
