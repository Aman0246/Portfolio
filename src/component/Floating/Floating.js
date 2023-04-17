import React from 'react'

export default function Floating( props) {
  return (
    <div>
        <div className="floatingdiv">
             <span>{props.text1}</span><br/>
            <span>{props.text2}</span>
        </div>
      
    </div>
  )
}
