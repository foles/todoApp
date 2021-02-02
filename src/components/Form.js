import React from 'react';

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };
    const submitTodoHandler = e => {
        e.preventDefault();
        if (inputText !== '') {
            setTodos([...todos, { task: inputText, isCompleted: false, id: Math.random() * 1000 }]);

            setInputText("");
        }
    }

    const statusHandler = e => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" />
            <button onClick={submitTodoHandler} type="submit"> Agregar </button>
            <div>
                <select onChange={statusHandler} name="todos">
                    <option value="all">Todos</option>
                    <option value="completed">Hechos</option>
                    <option value="uncompleted">Pendientes</option>

                </select>
            </div>
        </form>
    );
}

export default Form;
