import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
// Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )



function App() {

  const [Name,setName]=useState("")
  const [Age,setAge]=useState("")
  const [Address,setAddress]=useState("")
  const [Salary,setSalary]=useState("")

  return (
     <>
      <div>
        <h1>Name</h1>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div>
        <h1>Age</h1>
        <input type="Number" value={Age} onChange={(e)=>setAge(e.target.value)}/>
      </div>


      <div>
        <h1>Address</h1>
        <input type="text" value={Address} onChange={(e)=>setAddress(e.target.value)}/>
      </div>


      <div>
        <h1>Department</h1>
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
      </div>


      <div>
        <h1>Salary</h1>
        <input type="Number" value={Salary} onChange={(e)=>setSalary(e.target.value)}/>
      </div>

      <div>
           <h1>marital state</h1>
           <input type="checkbox" />
       </div>
    
    


     </>
  );
}

export default App;
