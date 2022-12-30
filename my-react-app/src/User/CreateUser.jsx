import React, { useEffect } from 'react'
import './CreateUser.css';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const CreateUser = () => {
const navigate = useNavigate()
   const [firstname, setfirstname] = useState("")
   const [lastname, setLastName] = useState("")
   const [address, setAddress] = useState("")
const [Error, setError] = useState("")

  

  
  
   
   
  const HandleSubmit =   async() =>{
  

      const URL = `http://localhost:3002/craeteuser`;
  const res =     await   axios.post(URL,{
        firstname:firstname,
        lastname:lastname,
        address:address

       })
       setError(res.data.details[0].message);      

    }  
    
  return (
    <div>
        <form action="">
        <fieldset>
<legend>Create User</legend>
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(e)=> setfirstname(e.target.value) }/>
            <label htmlFor="">Last Name</label>
            <input type="text"  onChange={(e)=> setLastName(e.target.value) }/>
            <label htmlFor="">Address</label>
            <input type="text"  onChange={(e)=> setAddress(e.target.value) }/>
         <p>{Error}</p>
</fieldset>

        </form>
        <button className='button ' onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default CreateUser