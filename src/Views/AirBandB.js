import React, { useState} from 'react';

function AirBandB(){
    const [isFlipped, addFlip] = useState(true);
        
    const toggleClass = () => {
        addFlip(!isFlipped);
      };

    return (
        <div class="deck">
        <div class="card" className={isFlipped ? 'card': 'card flipped'} 
      onClick={toggleClass}>

            <h2 class="front">
                <p>The AirB&B</p>
            </h2>
            <h3 class="back" style={{'display': 'block', 'padding-top': '40%'}}>
            <a class="link" href="https://airbnb.com">Check it out!</a>
            <br /><br />
             Sat Oct 16 @ 3PM -<br/>Tue Oct 19 @ 12PM. <br /><br />
             Forks, WA
            <br /><br />            
            </h3>
        </div>
    </div>
    )}

export default AirBandB