import React from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import sign from "../../Utils/Images/sign.jpg"
import { useState } from 'react'

function Signup() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()


    const navigate = useNavigate()
    const handleLogin = () => {

        let payload = {
            name,
            email,
            password
        }
        localStorage.setItem("sign",JSON.stringify(payload))
        // console.log(payload)
        navigate("/login", {payload})
    }
    return (
        <div className='signup-container'>
            <img className='signup-image' src={sign} alt="" />
            <div className='signup-div'>
                <h3>SIGNUP</h3>
                <div >
                    <p>Name</p>
                    <input className='ip1' type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name' />
                </div>
                <div>
                    <p>Email</p>
                    <input className='ip3' onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your email' />
                </div>
                <div>
                    <p>Password</p>
                    <input className='ip2' onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter your password' />
                </div>
                <div>

                    <button className='signup-button' onClick={handleLogin}>Sign up</button>
                </div>
                <div></div>

            </div>

        </div>
    )
}

export default Signup