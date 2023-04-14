import React from 'react'
import "./Facility.css"
import { FiCheckCircle } from "react-icons/fi";



function Facility() {
    return (
        <div className='facility-container'>
            <h3>ABOUT FACILITIES</h3>
            <div className='facility-box'>
                {/* <div className='facility-'> */}
                <div className='facility-listone'>
                    <h3>OUR FACILITIES</h3>
                    <div className='facility-wrap'>
                       <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div> 
                        <p>Over 18,000 square feet of space</p>
                    </div>

                    <div className='facility-wrap'>
                    <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>
                            Locker rooms with private showers and day lockers</p>
                    </div>

                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>Two levels of cardio equipment</p>
                    </div>

                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>60 feet of turf for sleds</p>
                    </div>

                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>Dumbbells up to 150 lbs</p>
                    </div>

                </div>
                <div className='facility-listtwo'>
                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>
                            Hammer Strength plate loaded equipment</p>
                    </div>

                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>
                            Pin loaded weight training machines</p>
                    </div>


                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>4 deadlift platforms with bumper plates</p>
                    </div>


                    <div className='facility-wrap'>
                         <div style={{backgroundColor:"red" ,alignItems:"center", display:"flex",justifyContent:"center" }}><FiCheckCircle /></div>
                        <p>Rogue Glute Hamstring Developer</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Facility