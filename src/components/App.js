import React, { useState } from 'react'
import Todo from './Todo'
import Counter from './Counter'

const App = () => {
    const[count,setCount]=useState(0)
  return (
    <div id='main'>
         <h1>Todo List with useMemo and React.memo</h1>
      <Todo></Todo>
      <Counter></Counter>
    </div>
  )
}

export default App
