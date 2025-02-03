import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  return (
    <>
      <div>
        The count is {count}
      </div>
      <button onClick={()=>{setCount(count**2)}}>Update Count {count}</button>
    </>
  )
}

export default App
