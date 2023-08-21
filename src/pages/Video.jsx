import React from 'react';
import {useCallback,useState} from "react";

import {useNavigate,Link } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';import We from '../img/video.png';
const Video = () => {
  const [value,setValue]=useState();

    const navigate=useNavigate()

    const handleJoinRoom =useCallback(()=>{
  navigate(`/room/${value}`);
    },[navigate,value]);
    
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <form >
    <span className="logo">Join Meeting</span>
    <img className='video_image' src={We} alt="" />
    <div className="email">
         <span> <GroupsIcon  /></span>
      <input type="text" placeholder="Enter Room Code"
       value={value}
       onChange={(e) => setValue(e.target.value)}
        />
        </div>
     
       <button  className="signin_button" onClick={handleJoinRoom}>Join</button>
      
       </form>
       <p> <Link to="/">Back to Home</Link></p>

       </div>
    </div>
  )
}

export default Video
