import { useState } from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin'
import Page from './components/Page'
import Product from './components/Product'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/sign' element={<Signup/>}/>
<Route path='/adm' element={<Page child={<Admin/>}/>}/>
<Route path='/p' element={<Page child={<Product/>}/>}/>



</Routes>
    </>
  )
}

export default App
