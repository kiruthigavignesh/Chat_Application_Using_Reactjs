import React from 'react'
import Sidebar from '../components/Sidebar'
import Chats from '../components/Chats'

const Home = () => {
  return (
    
   <div className='home'>
    <div className='container'>
        <Sidebar/>
<Chats/>
    </div>
   </div>
  )
}

export default Home
