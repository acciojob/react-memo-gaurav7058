import React, { useState, useMemo } from "react";
import UseMemoComponent from "../components/UseMemo";
import ReactMemoComponent from "../components/ReactMemo";

function App() {
  const [tasks, setTasks] = useState(["New todo"]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  // Add a new todo task
  const addNewTask = () => {
    setTasks([...tasks, "New todo"]);
  };

  // Increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Handle input change for custom task
  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  // Add a custom task if it passes validation (more than 5 characters)
  const addCustomTask = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  // UseMemo to calculate task length for performance optimization
  const taskCount = useMemo(() => tasks.length, [tasks]);

  return (
    <div className="App">
      <h1>Todo List with useMemo and React.memo</h1>
      <button onClick={addNewTask}>Add New Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <UseMemoComponent taskCount={taskCount} />
      
      <input 
        type="text" 
        value={customTask} 
        onChange={handleInputChange} 
        placeholder="Enter a custom task"
      />
      <button onClick={addCustomTask}>Submit Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <ReactMemoComponent key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
