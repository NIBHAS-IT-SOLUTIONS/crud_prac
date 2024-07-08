import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateUSer() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const[age,setAge]=useState(0)
const navigate= useNavigate()

function handleChange(e){
 setName(e.target.value)
}
function handleChange2(e){
  setEmail(e.target.value)
}
function handleChange3(e) {
  setAge(e.target.value)
  
}


function handleSubmit(e){
  e.preventDefault()
console.log(name,email,age);
const res=axios.post('http://localhost:3001/createUser',{
  name,email,age
}
)
navigate('/')
}

  return (
    <div>
          <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
    <form onSubmit={(e)=>handleSubmit(e)} action="">

        <h2>Add User</h2>
        <div className="mb-2">
            <label htmlFor="Name"></label>
            <input onChange={(e)=>handleChange(e)} type="text" placeholder='Enter Name' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="email"></label>
            <input onChange={(e)=>handleChange2(e)} type="mail" placeholder='Email' className='form-control' />
        </div>

        <div className="mb-2">
            <label htmlFor="Nmae"></label>
            <input onChange={(e)=>handleChange3(e)} type="number" placeholder='Age' className='form-control' />
        </div>

        <button type='submit' className='btn btn-success'>Submit</button>
        
    </form>
      </div>
    </div>

    </div>
    
  )
}

export default CreateUSer
