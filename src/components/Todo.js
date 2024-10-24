import React ,{useState,useEffect,useMemo} from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState(["New todo"]);
    const [customTask, setCustomTask] = useState("");
    const addNewTask = () => {
        setTasks([...tasks, "New todo"]);
      };

      const addCustomTask = () => {
        if (customTask.length > 5) {
          setTasks([...tasks, customTask]);
          setCustomTask("");
        } else {
          alert("Task must be more than 5 characters!");
        }
      };
  return (
    <div>
      <button id="add-todo-btn" onClick={addNewTask}>Add New Todo</button>
    </div>
  )
}

export default Todo
