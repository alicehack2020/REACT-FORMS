import React, { useEffect, useState } from 'react'

const Home = () => {
const [data,setData]=useState([])
useEffect(()=>{

    fetch('http://localhost:3004/users').then((res)=>res.json()).then((res)=>setData(res))

},[])

 // Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )
  return (
    <>
     <table>
     <thead>
         <tr>
            <td>name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Department</td>
            <td>Salary</td>
            <td>marital state</td>
        </tr>
     </thead>
     {/* "Name": "sdf",
      "Age": "345",
      "Address": "rtert",
      "Salary": "3",
      "marital_state": true,
      "Department": "coconut", */}

      {/* <td>name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Department</td>
            <td>Salary</td>
            <td>marital state</td> */}
     <tbody>
       {data.map((res)=>{
        return(<>
            <tr>
                <td>{res.Name}</td>
                <td>{res.Age}</td>
                <td>{res.Address}</td>
                <td>{res.Department}</td>
                <td>{res.Salary}</td>
                <td>{res.marital_state===true?<p>Yes</p>:<p>No</p>}</td>
            </tr>
        </>)
       })}
          
     </tbody>
       
     </table> 
    </>
  )
}

export default Home