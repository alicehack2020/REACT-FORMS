import React from 'react'
import NavBar from './components/NavBar'
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import Register from "./components/Register"
const App = () => {
  return (
    <div>
         <NavBar></NavBar> 
         <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/Register' element={<Register></Register>}> </Route>
         </Routes>
    </div>
  )
}

export default App