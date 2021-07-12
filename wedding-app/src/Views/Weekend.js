import React, { useState} from 'react';

function Weekend(){
    const [isFlipped, addFlip] = useState(true);
        
    const toggleClass = () => {
        addFlip(!isFlipped);
      };

    return (
        <div class="deck">
        <div class="card" className={isFlipped ? 'card': 'card flipped'} 
      onClick={toggleClass}>

            <h2 class="front">
                <p>Schedule</p>
            </h2>
            <h3 class="back">
                There is no firm plan for Sat & Sun. Feel free to take day trips to hiking trails, beaches, or Seattle.
                <br /><br />
                We can plan something together or you can enjoy some time away from home. Let us know!
            </h3>
        </div>
    </div>
    )}

export default Weekend