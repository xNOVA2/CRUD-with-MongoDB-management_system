import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom'

import { FaArchive,FaMarker } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Home = () => {
const [data, setdata] = useState([]);
const api = () =>{
  const URL = `http://localhost:3002/`;
  axios.get(URL).then((res)=>{
    setdata(res.data);
   
  })
}

useEffect(() => {
  api()
  

}, [])


const HandleDelete = (id) =>{
  axios.delete(`http://localhost:3002/deleteuser${id}`).then(()=>{
    console.log("deleted");
    api()
  })
}
const handleSearch = (e) =>{
  let key = e.target.value;
  if(!key)

  return  api()
  
  else{

    axios.get(`http://localhost:3002/search${key}`).then((res)=>{
      setdata(res.data)
    }) 
  }
 
}
return (
<>
<input type="search" className='search' placeholder='Search...' onChange={handleSearch}/>
 <div className='btn'>
        <button className='button'><Link to='/createUser'>Create User   <span><FaMarker/></span></Link></button>
    </div>
    <div className='deigine'>
    <table>
      <thead>
      <tr>
    <th>S No</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>Actions</th>
  </tr>
      </thead>
      <tbody>
      {data.map((res , index)=>{
        return(
          <>
            <tr>
            <td key={res._id}>{index}</td>
            <td> {res.firstname}</td>
            <td>{res.lastname}</td>
              <td>{res.address}</td>
              
              <td><button className='btnnn' onClick={()=>HandleDelete(res._id)}>Delate  <span className='icon'> <FaArchive/></span></button></td>
              </tr>
        
          </>
        )
      })}


 </tbody>
 
 
  
</table>
    </div>
    </>
  )
}

export default Home