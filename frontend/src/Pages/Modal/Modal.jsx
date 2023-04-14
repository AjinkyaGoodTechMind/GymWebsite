import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Modal.css"

function Modal({ }) {
  const location = useLocation()
const [show,setShow] = useState("hidden")
const [count,setCount] = useState(1)

const handleDisplay = ()=>{

// setShow("")
setCount(prev=>prev+1)
if(count%2==0){
  setShow("")
}else{
  setShow("hidden")
}
}

  console.log(location.state)
  return (
    <div className="modal-container">
      <div className='modal-div'>
        <img className='im-modal' src={location.state.image} alt="" />
        <h3>{location.state.name}</h3>
        <h3>$ {location.state.price}</h3>
        <button onClick={handleDisplay}>Proceed</button>
      </div>

      <div className="modal-order-div" style={{visibility:`${show}`}}>
        <div className='modal-heading'><h3>Enter Details</h3></div>
        <div className='modal-name-div'><p>Name</p><input type="text" placeholder='' /></div>
        <div className='modal-address-div'>
          <div className='modal-address-fist'>
            <p>Address</p>
            <input type="text" placeholder='House Name/ House No' />
          </div>

          <input className='modal-input-city'  type="text" placeholder='City' />

          <div className='modal-selector'>
             <label style={{ color: "black" }}>State</label>
            <select name="" id="" >
              <option value="">Select</option>
              <option value="KL">Kerala</option>
              <option value="Mb">Mumbai</option>
              <option value="Kar">Karnadaka</option>
              <option value="Kol">Kolkata</option>
              <option value="And">Andra Pradesh</option>
            </select>
          </div>

         <div className='modal-pin'><input type="number" placeholder='Pin' /></div> 
          <button className='signup-button'>Order</button>

        </div>

      </div>

    </div>
  )
}

export default Modal