import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {



  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.isCompleted === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.isCompleted === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") !== null) {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosLocal);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1> Lista de Tareas </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filterTodos={filterTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
