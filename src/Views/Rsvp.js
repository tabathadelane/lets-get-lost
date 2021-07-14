import React, { useState} from 'react';

function Food(){
    const [isFlipped, addFlip] = useState(true);
        
    const toggleClass = () => {
        addFlip(!isFlipped);
      };

    return (
        <div class="deck">
        <div class="card" className={isFlipped ? 'card': 'card flipped'} 
      onClick={toggleClass}>

            <h2 class="front">
                <p>RSVP</p>
            </h2>
            <h3 class="back">
            RSVP
            <br /> <br />
            We have very carefully selected the guest list, so there is no need to RSVP!
            
            </h3>
        </div>
    </div>
    )}

export default Food