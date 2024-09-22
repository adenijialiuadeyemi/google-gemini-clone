import React, { useState } from 'react'
import './Sidebar2.css'
import { assets } from '../../assets/assets'
const Sidebar2 = () => {

    const [spread, setSpread] = useState(0)
  return (
    <div class="sidebar">
        <div class="top">
            <img className="menu" src={assets.menu_icon} onClick={()=>setSpread(prev=>!prev)}/>
            <div className='chat ext'>
                <img src={assets.plus_icon} />
                {spread?<p>New Chat</p>:null}
            </div>
            <div className='recent'>
                <p>Recent</p>
            </div>
            <div className='recent-act ext'>
                <img src={assets.plus_icon} />
                {spread?<p>What is react...</p>:null}
            </div>

        </div>
        <div class="bottom">
            <div className='bottom-act ext'>
                <img src={assets.question_icon} />
                {spread?<p>Help</p>:null}
            </div>
            <div className='bottom-act ext'>
                <img src={assets.history_icon} />
                {spread?<p>Activity</p>:null}
            </div>
            <div className='bottom-act ext'>
                <img src={assets.setting_icon} />
                {spread?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar2