import React, { useState } from 'react'
import { Link , NavLink} from 'react-router-dom'
import logo from "../assets/logo.svg"
import { auth, provider} from  "../firebase/config"
import { signInWithPopup, signOut } from 'firebase/auth'

export const Header = () => {
  const [isAuth, setIsauth] = useState(JSON.parse(localStorage.getItem("isAuth"))||false);

  function handelLogin(){
    signInWithPopup(auth, provider).then((result) =>{
      // console.log(result);
      setIsauth(true);
      localStorage.setItem("isAuth", true)
    })
  }

  function handelLogout(){
    signOut(auth);
    setIsauth(false);
    localStorage.setItem("isAuth", false)
  }

  return (
    <header>
    <Link to="/" className="logo">
      <img src={logo} alt="WriteNode Logo" />
      <span></span>
    </Link>
    <nav className="nav">
      <NavLink to="/" className="link" end>Home</NavLink>
    
       {isAuth ? (<>
        <NavLink to="/create" className="link">Create</NavLink>
        <button onClick={handelLogout}  className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button></>) : ( <button onClick={handelLogin}   className="auth"><i className="bi bi-google"></i> Login</button>  )}
          
         
                    
    
        
     
    </nav>
  </header>
  )
}
