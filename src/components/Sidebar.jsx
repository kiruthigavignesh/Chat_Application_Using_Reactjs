import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';

import Chat from './Chat';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {motion} from 'framer-motion';
const Sidebar = () => {

  // const  [selected, setSelected] = useState(0);

  // const [expanded,setExpaned] = useState(true)

  // const sidebarVariants = {
  //   true: {
  //     left:'0'
  //   },
  //   false:{
  //     left:'-60%'
  //   }
  // }
  // console.log(window.innerWidth)
  /* <>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
       <div className="bars" style={expanded?{left: '27%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
       <MenuOutlinedIcon/>
      </div> */
  return (

    <div className='sidebar'>

<Navbar/>    
<Search/>

<Chat/>
</div>

  );
}

export default Sidebar
