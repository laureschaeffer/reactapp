import React, { useState } from 'react'

export default function Toggle() {
    const [toggle, updateToggle] = useState(false);
    
    return (
        <div>
            <button onClick={() => {updateToggle(!toggle)}}>Toggle</button>

            {/* si toggle est à true, alors affiche */}
            {toggle && <p>It has been toggled</p>}
        </div>
  )
}
