import React from 'react'
import './Icons.css'
import { Icon } from '../../assets/Icon';
const Icons = () => {
  return (
    <div className='container'>
        <div className="icon-text">
        <h1>Communication Monitoring for Various Apps</h1>
        <p>Monitor 20+ popular apps and social media platforms</p>
        </div>
      <div className='icons'>
        {
            Icon.map((item,ind)=>{
                return(
                    <div className='map-icon' key={ind}>
                        <img src={item.icon} alt="" />
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default Icons