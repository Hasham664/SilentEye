import React from 'react'
import './TryNow.css';
import { trynow } from '../../assets/Trynow';
const TryNow = () => {
  return (
    <div className='trynow'>
        <div className="container">
            {
                trynow.map((item,ind)=>{
                    return (
                        <div className='try-grid'>
                        <div className='try-text'>
                            <h1>{item.title}</h1>
                           {
                            item.tryList.map((pro,ind)=>{
                                return(
                                    
                                    <div className='try-text-flex'>
                                        <img src={pro.icon} alt="" />
                                        <p>{pro.desc}</p>
                                    </div>
                                )
                            })
                           }
                           <div className="item-button">
                            <button>{item.button}</button>
                           </div>
                        </div>
                        <div className="try-img">
                            <img src={item.main} alt="" />
                        </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default TryNow