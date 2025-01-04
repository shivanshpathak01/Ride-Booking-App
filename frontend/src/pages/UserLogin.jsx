import React from 'react'

const UserLogin = () => {
  return (
    <div>
      <form>
        <h3>What's your email?</h3>
        <input type="email" required placeholder='example@gmail.com'/>
        <h3>Enter Password</h3>
        <input type="password" required placeholder='password'/>
        <button>Login</button>
      </form> 
    </div>
  )
}

export default UserLogin
