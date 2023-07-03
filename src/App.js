import React, { useState } from 'react';
import './App.css';

function App() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, { text: newTask, done: false }]);
        setNewTask("");
    }

    const deleteTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const toggleTask = index => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    }

    return (
        <div id="app">
            <div className="new-task-wrapper">
                <input data-testid="new-task-input" maxLength={50} className="new-task" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Wpisz nowe zadanie"/>
                <button data-testid="new-task-button" className="add-btn" onClick={addTask}>Dodaj zadanie</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span className={`task-name ${task.done ? 'done' : ''}`}>{task.text}</span>
                        <div className="buttons-wrapper">
                            <button data-testid={`toggle-btn-${index}`} className="toggle-btn" onClick={() => toggleTask(index)}>{`Oznacz jako ${task.done ? "nie" : ""}wykonane`}</button>
                            <button data-testid={`delete-btn-${index}`} className="delete-btn" onClick={() => deleteTask(index)}>Usuń</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;