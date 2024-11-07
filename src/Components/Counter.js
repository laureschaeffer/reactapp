import React, { useState } from 'react'

export default function Counter() {
    let count = 0;
    //etat actuel et etat actualisé
    const [currentState, updatedState] = useState(count)
    const handleClick = () => {
        updatedState(currentState + 1)
    }

    return (
        <div className='counter-parent'>
            <div className='counter'>
                <h3>Counter</h3>
                <button onClick={handleClick}>{currentState}</button>
            </div>
        </div>
    )
}
