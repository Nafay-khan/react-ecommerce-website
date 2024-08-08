import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../config/firebase'

const Login = () => {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const loginFunc = async ()=>{

        try {
            await loginUser(email, password)
            alert('loged in hogya')
            navigate('/dashboard')
        } catch (e) {
            alert(e.message)
        }
        
    }
  return (
    <section className="h-screen">
  <h1 className='text-center text-5xl font-bold text-blue-700'>LOGIN PAGE</h1>
  <div className="h-full">
    {/*Left column container with background */}
    <div
      className="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image" />
      </div>

      {/* <!-- Right column container --> */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          {/* <!-- Email input --> */}
          <div className="relative mb-6 w-72">
            <label className="input input-bordered flex items-center gap-2">
               Email
               <input type="email" onChange={e=>{setEmail(e.target.value)}} className="grow" placeholder="enter email eddress" />
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className="relative mb-6 w-72">
            <label className="input input-bordered flex items-center gap-2">
               Password
               <input type="password" onChange={e=>{setPassword(e.target.value)}} className="grow" placeholder="enter password" />
            </label>
          </div>

          {/* <!-- Login button --> */}
          <div className="text-center lg:text-left w-72">
            <button
              onClick={()=>loginFunc()}
              className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Login
            </button>

            {/* <!-- Register link --> */}
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-center">
              Don't have an account?
              <button onClick={()=>navigate(-1)} className="text-blue-700">Register</button>
            </p>
          </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login