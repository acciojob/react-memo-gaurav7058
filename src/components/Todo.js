import React ,{useState,useEffect} from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState(["New todo"]);

    const addNewTask = () => {
        setTasks([...tasks, "New todo"]);
      };
  return (
    <div>
      <button id="add-todo-btn" onClick={addNewTask}>Add New Todo</button>
    </div>
  )
}

export default Todo
