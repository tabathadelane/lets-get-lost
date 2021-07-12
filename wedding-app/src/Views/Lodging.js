import React, { useState} from 'react';

function Lodging(){
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
            <h3 class="back" style={{'display': 'block', 'padding-top': '20px'}}>
            <a href="https://google.com">Check it out!</a>
            <br /><br />
            We have the cabin booked from Sat Oct 16 @ 3PM - Tue Oct 19 @ 12PM. 
            <br /><br />            
            </h3>
        </div>
    </div>
    )}

export default Lodging