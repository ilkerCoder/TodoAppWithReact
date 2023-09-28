import { useState } from 'react';
import './App.css';
import Filter from "./filter";
function App() {

  // State Declarations
  const [todos , setTodos] = useState([
    {task:"EXAMPLE TASK1",isActive:false},
    {task:"EXAMPLE TASK2", isActive:false}
  ]);
  const [todoInput, setTodoInput] = useState("");
  const [filterText ,setFilterText] = useState("");

  // Adding New Task
  let handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { task: todoInput, isCompleted: false }]);
    setTodoInput(""); // Input değerini sıfırla
  } 

  // Tasks That Filtered
  let filtered = todos ? todos.filter(p => p.task.toString()
    .toLowerCase().includes(filterText.toLowerCase())) : todos;

  // Remove The Specific Task
  let removeTask = (task) => {
    setTodos(todos.filter(todo => todo.task !== task));
  }

  // Remove All The Tasks
  let removeAll = () => {
    setTodos([]);
  }

  return (
    <div className="App">
      <section className="todoapp">
        <div className="inputs">
          <header className="header">
            <h1>TODOS</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="new-todo" 
                placeholder="ADD TASK" 
                autoFocus 
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
              />
            </form>
          </header>
          <div className="filter"> 
            <Filter setFilterText={setFilterText}></Filter>
          </div>
        </div>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {filtered.map((p,index) => (
              <li key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox"  />
                  <label>{p.task}</label>
                  <button className="destroy" onClick={() => removeTask(p.task)}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.length +" "}</strong>
            TOTAL TASKS 
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={() => removeAll()}>
            Clear completed
          </button>
        </footer>
      </section>

    </div>
  );
}

export default App;