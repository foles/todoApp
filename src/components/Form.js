import React from 'react';
import './Form.css'
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
        <div className="App__form">

            <div className="form__input">
                <input value={inputText} onChange={inputTextHandler} type="text" />
                <button onClick={submitTodoHandler} type="submit"> Add </button>

            </div>

            <div className="form__filter">
                <select onChange={statusHandler} name="todos">
                    <option value="all">Todos</option>
                    <option value="completed">Hechos</option>
                    <option value="uncompleted">Pendientes</option>
                </select>
            </div>

        </div>



    );
}

export default Form;
