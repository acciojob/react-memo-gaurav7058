import React, { useState } from 'react'
import Todo from './Todo'

const App = () => {
    const[count,setCount]=useState(0)
  return (
    <div id='main'>
         <h1>Todo List with useMemo and React.memo</h1>
      <Todo></Todo>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} id="incr-cnt">Increment</button>
    </div>
  )
}

export default App
