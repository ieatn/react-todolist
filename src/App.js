import React, {useState} from "react"
import "./App.css"

function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const add = () => {
    setList([...list, todo])
    console.log(list)
  }
  return (
    <div className="App"> 
      <input type="text"
        value={todo}
        onChange ={e => setTodo(e.target.value)}
      />
      <button onClick={add}>add</button>
      <ul>
        {list.map(i => {
          return (
            <li key={i.id}>{i}</li>
          )
        })}
      </ul>
    </div>
  )
} 
export default App;
