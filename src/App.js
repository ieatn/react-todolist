import React, {useState} from "react"
import "./App.css"

function App() {
  // task
  const [item, setItem] = useState('')
  // list of tasks
  const [list, setList] = useState([])
  
  function addItem() {
    const task = {
      id: Math.random(),
      value: item
    }
    setList(oldList => [...oldList, task])
    setItem("")
    console.log(list)
  }
  function deleteItem(id) {
    const arr = list.filter(i => i.id !== id);
    setList(arr)
  }
  return (
    <div className="app"> 
      <h1>TodoList</h1>
        <input 
        type="text" 
        value={item}
        onChange={e=>setItem(e.target.value)}
      />
      <button onClick={() => addItem()}>add</button>
      <ul>
        {list.map(i => {
          return(
            <li key={i.id}>{i.value} <button onClick={() => deleteItem(i.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  )
} 
export default App;