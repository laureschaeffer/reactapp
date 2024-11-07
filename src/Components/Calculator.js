import React from 'react'

export default function Calculator() {
  return (
    <div className='calculator-content'>
        <div class="calculator">
            <input type="text" id="display" disabled />

            <div>
            <input type="button" value="7" class="button number"/>
            <input type="button" value="8" class="button number"/>
            <input type="button" value="9" class="button number"/>
            <input type="button" value="+" class="button operation" />
            </div>

            <div>
                <input type="button" value="4" class="button number"/>
                <input type="button" value="5" class="button number"/>
                <input type="button" value="6" class="button number"/>
                <input type="button" value="-" class="button operation" />
            </div>
            <div>
                <input type="button" value="1" class="button number"/>
                <input type="button" value="2" class="button number"/>
                <input type="button" value="3" class="button number"/>
                <input type="button" value="*" class="button operation" />
            </div>
            <div>
                <input type="button" value="0" class="button number"/>
                <input type="button" value="." class="button number"/>
                <input type="button" value="/" class="button operation" />
                <input type="button" value="=" class="button equal" />
            </div>
            <input type="button" value="C" class="button clear" />
        </div>
    </div>
  )
}
