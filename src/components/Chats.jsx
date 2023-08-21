import React, { useContext } from 'react'
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import { useNavigate, Link } from "react-router-dom";
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'; 
const Chats = () => {

 

  const { data } = useContext(ChatContext);
  return (
    <div className='chats '>
      <div className="chatInfo">
      <span>{data.user?.displayName}</span>
        <div className="chatIcons">

        <Link to="/video" style={{textDecoration:'none'}}> <button className='meetbutton' > <VideoCameraFrontIcon className='video_icon'/>
       Join Meeting</button></Link>
        <img src={Add} alt="" className='user_img'/>
        <img src={More} alt="" className='user_img'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chats
