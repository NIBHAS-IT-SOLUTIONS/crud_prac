import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function UpdateUser() {

  const {id}=useParams()
  const [name,setName]=useState('')
const [email,setEmail]=useState('')
const[age,setAge]=useState(0)
const navigate=useNavigate()
  
useEffect(()=>{
  axios.get('http://localhost:3001/getUser/'+id)
  .then(result=>{console.log(result)
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)
  })
  .catch(err=>console.log(err))
},[])

const Update=async(e)=>{
  e.preventDefault()

  const res=await axios.put('http://localhost:3001/updateUser/'+id,{
    name,email,age
  }
 
)
console.log(res)
  navigate('/')
}

  return (
    <div>
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
    <form action="" onSubmit={Update}>
        <h2>Update User</h2>
        <div className="mb-2">
            <label htmlFor="Nmae"></label>
            <input type="text" placeholder='Name' className='form-control' value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className="mb-2">
            <label htmlFor="Nmae"></label>
            <input type="mail" placeholder='Email' className='form-control' value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="mb-2">
            <label htmlFor="Nmae"></label>
            <input type="number" placeholder='Age' className='form-control' value={age}
            onChange={(e)=>setAge(e.target.value)}/>
        </div>

        <button className='btn btn-success'>Update</button>
        <Link to='/'><button className='btn btn-primary float-end'>Back</button>
        </Link>
    </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateUser
