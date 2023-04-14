import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom"
import LandingPage from '../Landingpage/LandingPage'
import FeaturesPage from '../Features/FeaturesPage'
import Gallery from '../Gallery/Gallery'
import Facility from '../Facilities/Facility'
import Footer from '../Footer/Footer'
import CoppyWrite from '../CoppyWrite/CoppyWrite'
import { BiUser } from 'react-icons/bi';


function Navbar() {
    const navigate = useNavigate()

    const handleUserProfile = ()=>{
        navigate("/user")
    }

    const handleMove = () => {
        navigate("/workout")
    }

    const handleProduct = ()=>{
        navigate("/plans")
    }
    const handleSign = ()=>{
        navigate("/signup")
    }

    return (
        <div className='nav'>
            <div className='logo'><img src="https://www.shutterstock.com/image-vector/fitness-gym-logo-design-template-600w-1663692082.jpg" alt="" />
                <h3>WoinFit</h3></div>
            <div className='details'>
                <div className='contact'>
                    <div>Home</div>
                    <div onClick={handleMove}>Workouts</div>
                    <div onClick={handleProduct}>Products</div>
                    <div>Schedule</div>
                    <div>Contact</div>
                </div>

                <div className='log-botton'><button className='btn' onClick={handleSign}>Login</button>
                
                </div>
                <div className='user-profile' onClick={handleUserProfile} ><BiUser style={{backgroundColor:"", width:"40px", height:"40px", border:"1px solid aliceblue",borderRadius:"5px"}} /></div>
            </div>
        </div>

    )
}

export default Navbar