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
            <a class="link" href="https://www.airbnb.com/rooms/13000987?source_impression_id=p3_1627412534_kXixYF7tOdrrPjV2">Check it out!</a>
            <br /><br />
             Sat Oct 16 @ 3PM -<br/>Tue Oct 19 @ 12PM. 
             <br /><br />
             77 Lake Pleasant Park Road, Beaver, WA 98305
            <br /><br />            
            </h3>
        </div>
    </div>
    )}

export default AirBandB
