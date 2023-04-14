import React from "react";
import "./Login.css";
import log from "../../Utils/Images/log.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  // const navigate = useNavigate()
  let signData = JSON.parse(localStorage.getItem("sign"));
//   console.log(signData);
  let login = JSON.parse(localStorage.getItem("login")) || [];
  const handleLogin = () => {
    let payload = {
      email,
      password,
    //   signData.name,
    };
    let count = 0;

    if (
      signData.email == payload.email &&
      signData.password === payload.password
    ) {
      localStorage.setItem("login", JSON.stringify(signData));
      alert("Login Successfully");
      navigate("/");
    } else {
      alert("LOgin Failed");
    }

    // console.log(payload);
  };

  return (
    <div className="login-container">
      <img className="login-image" src={log} alt="" />
      <div className="login-div">
        <h3>LOGiN</h3>
        {/* <div >
                    <p>Name</p>
                    <input className='ip1' type="text" placeholder='Enter your Name' />
                </div> */}
        <div>
          <p>Email</p>
          <input
            className="ip3"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            className="ip2"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
