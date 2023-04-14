import React, { useState } from 'react'
import "./Form.css"
import { useLocation, useNavigate} from 'react-router-dom'


function FormPage({ }) {

    const location = useLocation() 
    const navigate = useNavigate()
// const obj = useNavigationState(state=>state.obj)

// ls
    // const { category,time } = route.params;
    const [submit,setSubmit] = useState()
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [gender,setGender] = useState()
    const [email,setEmail] = useState(location.state.email)

    const [cat, setCat] = useState(location.state.category)
    const [trainer, setTrainer] = useState(location.state.trainer)
    //  console.log(location.state)

     let plansData = JSON.parse(localStorage.getItem("plans")) || []
     const handleSubmit = (e)=>{
        e.preventDefault()
        // setSubmit(e.target.value)
        let payload = {
            name,
            age,
            gender,
            cat,
            trainer,
            email
        }
        console.log(payload)
        plansData.push(payload)
localStorage.setItem("plans",JSON.stringify(plansData))
navigate("/workout")
     }

    console.log(location.state)
    return (
        <div className='form-container'>

            <div className='form-heading'><h3>FILL APLLICATION</h3></div>
            {/* <div className='form-table'> */}
                <form action="" className='form' onSubmit={handleSubmit} >

                    <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' required />
                    <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age' required />
                    <label className='lab'>Gender<select onChange={(e)=>setGender(e.target.value)} id="select" required style={{color:"black"}} >
                    <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        </select></label>
                      
                        <input type="text" onChange={((e)=>setCat(e.target.value))} value={cat} />
                        <input type="text" onChange={((e)=>setTrainer(e.target.value))}  placeholder='Enter Your trainer Name' value={trainer} />

                   <input type="submit" value="Submit" id="submit" />
                
                </form>
               
            {/* </div> */}



        </div>
    )
}

export default FormPage