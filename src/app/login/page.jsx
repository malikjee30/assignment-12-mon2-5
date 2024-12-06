"use client"

import {signIn,  useSession } from 'next-auth/react'
import React from 'react'

const Login =() => {
    const session = useSession();
    console.log(session);
  return (
    <div>
     <button onClick={() => signIn("google")}>Login with google</button>
    
    
      {/* <button onClick={() => signIn("github")}>Login with github</button> */}
    </div>
  )
  
}

export default Login


