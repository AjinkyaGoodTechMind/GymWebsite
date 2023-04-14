import React from 'react'
import "./Landingpage.css"
// https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
function LandingPage() {
  return (
    <div className='cont'>
      <hr className="new1" />
      {/* <hr className="new2" /> */}
      <div className='pic-box'>
        <div className='pic1'>
          <img className='mg1' src="https://c4.wallpaperflare.com/wallpaper/692/659/618/man-workout-gym-working-wallpaper-preview.jpg" alt="" />
        </div>
        {/* <hr style={{color:"grey", width:"3px",height:"100%"}}  /> */}
        <div className='pic2'>
          {/* <p>bURN</p> */}
          <img src="https://fitnessfactorymaine.com/wp-content/uploads/2019/01/about-fitness-edited.png" alt="" />
        </div>
      </div>
      <div className='description-box'>
       <div className='text-content'><p>EMPOWER YOURSELF TO MAKE THE CHANGES YOU NEED TO MAKE</p></div> 
       <div className='text-motivatation'><p>IT'S ALL ABOUT YOU CAN ACHIEVE</p></div>
      <button className='reg-button'>LET'S GET STARTED</button>
      </div>


    </div>
  )
}

export default LandingPage