import React from 'react'

const Loginpage = () => {
  return (
    <>
     <form action="">
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
        </div>
        
        <button type="submit">Submit</button>
     </form>
    </>
  )
}

export default Loginpage