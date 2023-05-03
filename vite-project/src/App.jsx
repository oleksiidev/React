import { useState } from 'react'
import './style.css'

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos([...todos, { id: crypto.randomUUID(), title: newItem, completed: faulse },])
  }

  console.log(todos)

  return (
    <div>
      <form onSubmit={handleSubmit} className='new-item-form' action="">
        <div className='form-row'>
          <label htmlFor="item">New item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id='item' />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </div>
  )
}