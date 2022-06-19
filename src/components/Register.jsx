 import React from 'react';
import { useState } from 'react';
import "./Register.css"
 // Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )
function Register() 
{
  const [Name,setName]=useState("")
  const [Age,setAge]=useState("")
  const [Address,setAddress]=useState("")
  const [Salary,setSalary]=useState("")
  const [checked, setChecked] = useState(false);


  const submitForm=()=>{
   var dep=document.getElementById("department").value;
   console.log(dep);



   const data = { Name: Name,Age:Age,Address:Address,Salary:Salary,marital_state:checked,Department:dep};



   fetch(' http://localhost:3004/users', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
   })
   .then(response => response.json())
   .then(data => {
     console.log('Success:', data);
   })
   .catch((error) => {
     console.error('Error:', error);
   });
   


  }

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
        <select id='department'>
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
           <input name="checked" type="checkbox" checked={checked} 
          onChange={e => setChecked(!checked)} />
       </div>


       <button onClick={submitForm}>Submit</button>

       
    
    


     </>
  );
}

export default Register;



 
