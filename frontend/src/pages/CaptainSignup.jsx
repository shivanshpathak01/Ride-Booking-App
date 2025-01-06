import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const [vehicleColor,setVehicleColor] = useState('')
    const [vehiclePlate,setVehiclePlate] = useState('')
    const [vehicleCapacity,setVehicleCapacity] = useState('')
    const [vehicleType,setVehicleType] = useState('')

  
    const {captain,setCaptain} = React.useContext(CaptainDataContext)

    const submitHandler = async (e)=>{
      e.preventDefault()
  
      const captainData = {
        fullname : {
          firstname:firstName,
          lastname:lastName
        },
        password:password,
        email:email,
        Vehicle:{
          color:vehicleColor,
          plate:vehiclePlate,
          capacity:vehicleCapacity,
          vehicleType:vehicleType
        }
      }

      const response = (`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

      if(response.status===201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
      
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }
  return (
    <div>
    <div className='py-5 px-5 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" />



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

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-size-base'
          >Create Account</button>

        </form>

        <p className='text-center'>Already have a Account?<Link to='/captain-login' className='text-blue-600'> Login</Link> </p>

      </div>
      <div>
        <p className='text-[10px] leading-tight'> This site is protected by reCAPTCHA and <span className='underline'> Google Privacy Policy </span>and <span className='underline'>Terms of Service apply</span>. </p>
      </div>

    </div>
  </div>
  )
}

export default CaptainSignup
