import React from 'react'
import "./Experiance.css"
import circle from"./circle.png"
export default function Experiance() {
  return (
    <div className="experiance">
        <div className='bluee'></div>
        <div className="number">
            <div className='circle'>8+</div>
        <span>years</span>
        <span>Experiance</span>
            <img src={circle} alt="circle"  />
        </div>
        <div className="number">
        <div className='circle'>100+</div>
        <span>Completed</span>
        <span>Project</span>
        <img src={circle} alt="circle"  />
        </div>
        <div className="number">
        <div className='circle'>10+</div>
        <span>Companies</span>
        <span>Work</span>
        <img src={circle} alt="circle"  />
        </div>
    </div>
  )
}
