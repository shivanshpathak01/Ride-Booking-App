import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    setUserData({
      fullName : {
        firstName:firstName,
        lastName:lastName
      },
      password:password,
      email:email
    })

    
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div>
      <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
          <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />


          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg w-1/2 font-medium mb-2'>What's your Name?</h3>


            <div className='flex gap-4 mb-6'>
              <input type="text"
                required className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                placeholder='First Name'
                value={firstName} 
                onChange={(e)=>{
                  setFirstName(e.target.value)
                }}
                />

              <input type="text"
                required className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                placeholder='Last Name'
                value={lastName} 
                onChange={(e)=>{
                  setLastName(e.target.value)
                }}
                />
            </div>


            <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

            <input type="email"
              required className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              placeholder='example@gmail.com' 
              value={email} 
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input type="password" required
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              placeholder='Password'
              value={password} 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              />

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-size-base'
            >Create Account</button>

          </form>

          <p className='text-center'>Already have a Account?<Link to='/login' className='text-blue-600'> Login</Link> </p>

        </div>
        <div>
          <p className='text-[10px] leading-tight'>By proceeding, you consent to get mails, including by automated means, from Uber and
            its affiliates to the Email provided.</p>
        </div>

      </div>
    </div>
  )
}

export default UserSignUp
