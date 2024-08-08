import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth, onAuthStateChanged, signOut} from '../config/firebase'
// import { signOut } from 'firebase/auth'

const Navbar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              const uid = user.uid;
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    const logoutUser = async ()=>{
        try {
            await signOut(auth)
            alert('user succesfully logout')
            // setUser('')
        } catch (e) {
            alert(e.message)
        }
    }


  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Ecommerce website</a>
  </div>
  <div className="flex-none">
    {user ?.email.split('@')[0]}
    <ul className="menu menu-horizontal px-1">
      {/* <li><button onClick={()=>{navigate('login')}}>login</button></li> */}
      <li><button onClick={()=>{navigate('/addpost')}}>add product</button></li>
      <li><button onClick={logoutUser}>logout</button></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar