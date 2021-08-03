import React, { useState} from 'react';

function Ceremony(){
    const [isFlipped, addFlip] = useState(true);
        
    const toggleClass = () => {
        addFlip(!isFlipped);
      };

    return (
        <div class="deck">
            <div class="card" className={isFlipped ? 'card': 'card flipped'} 
      onClick={toggleClass}>

                <h2 class="front">
                    <p>Ceremony</p>
                </h2>
                <h3 class="back">
                    Hoh Rainforest •
                    Olympic National Park, Forks, WA <br /><br />
                    
                    Monday Oct 18 @ 3PM
                </h3>
            </div>
        </div>
    )}

export default Ceremony