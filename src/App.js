import React, {useState} from "react"
import "./App.css"

function App() {
  const [task, setTask] = useState("")
  const [list, setList] = useState([])
  const add = () => {
    setList(old => [...old, task])
    setTask("")
  }
  return (
    <div className="App"> 
      <h1>todolist</h1>
      <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
      <button onClick={() => add()}>add</button>
      <ul>
        {list.map(item => {
          return(
            <li>{item}</li>
          )
        })}
      </ul>
    </div>
  )
} 
export default App;
