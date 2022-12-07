import React, {useState} from "react"
import "./App.css"
function App() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const add = () => {
    setList([...list, task])
  }
  return (
    <div className="App"> 
      <h1>todolist</h1>
      <input type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}/>
      <button onClick={add}>add</button>
      <ul>
        {list.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  )
} 
export default App;
