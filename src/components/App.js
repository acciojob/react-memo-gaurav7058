import React, { useState, useMemo } from "react";
import UseMemoComponent from "./components/UseMemo";
import ReactMemoComponent from "./components/ReactMemo";

function App() {
  const [tasks, setTasks] = useState(["New todo"]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  const addNewTask = () => {
    setTasks([...tasks, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  const addCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  const taskCount = useMemo(() => tasks.length, [tasks]);

  return (
    <div id="main" className="App">
      <h1>Todo List with useMemo and React.memo</h1>

      <button id="add-todo-btn" onClick={addNewTask}>Add New Todo</button>
      <button id="incr-cnt" onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <UseMemoComponent taskCount={taskCount} />
      
      <input 
        id="skill-input"
        type="text" 
        value={customTask} 
        onChange={handleInputChange} 
        placeholder="Enter a custom task"
      />
      <button id="add-skill-btn" onClick={addCustomTask}>Submit Task</button>

      <ul>
        {tasks.map((task, index) => (
          <ReactMemoComponent key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
 