import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/sign' element={<Signup/>}/>
</Routes>
    </>
  )
}

export default App
