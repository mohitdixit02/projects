import React from 'react'
import {useNavigate} from 'react-router-dom'

function Button() {
  
  let navg =useNavigate();

  return (
    <>
        <div className="bttn_nav">
                <input type="button" value="<" onClick={()=>navg(-1)} /><input type="button" value=">" onClick={()=>navg(+1)} />
        </div>
    </>
  )
}

export default Button
