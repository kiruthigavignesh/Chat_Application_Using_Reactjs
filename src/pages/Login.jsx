import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import We from '../img/user.png';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const[visible,setVisible] =useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <div class="imgcontainer">
     <img src={We} alt="Avatar" className="avatar"/> 
  </div>
        <span className="logo">We Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <div className="email">
         <span> <EmailIcon/></span>
          <input type="email" placeholder="Email Id" /></div>
          <div className="email" style={{position:"relative"}}>
          <span> <HttpsIcon/></span>
          <input type={visible ? "text" : "password"} placeholder="Password" />
          {
            visible ?(
<VisibilityIcon
style={{right:'8px',top:'8px',position:'absolute',cursor:'pointer',fontSize:'25px'}}
onClick={()=>setVisible(false)}
/>

            ):
            <VisibilityOffIcon
style={{right:'8px',top:'8px',position:'absolute',cursor:'pointer',fontSize:'25px'}}
onClick={()=>setVisible(true)}
/>

          }
          </div>
         
          <button className="signin_button">Sign in</button>
          {err && <span>Something went wrong,Try Again!!</span>}
        </form>
        <p>Create a  account? <Link to="/register">Register Here</Link></p>
      </div>
    </div>
  );
};

export default Login;
