import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Toggle() {
    const [toggle, updateToggle] = useState(false);
    const navigate = useNavigate()
    const handleClick = () => {
      navigate('/about')
    }

    return (
        <div>
            <button onClick={() => {updateToggle(!toggle)}}>Toggle</button>

            {/* si toggle est à true, alors affiche */}
            {toggle && <p>It has been toggled</p>}

            <div className='navbutton'>
                <button onClick={handleClick}>Surprise destination</button>
            </div>
        </div>
        
  )
}
