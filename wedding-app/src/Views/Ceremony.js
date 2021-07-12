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
                    <p>Wedding Day</p>
                </h2>
                <div class="back">
                    Hoh Rainforest •
                    Olympic National Park, Forks, WA <br />
                    
                    Ceremony @ 4PM <br /><br />
                    Afterwards, everyone will return to the cabin as we take sunset photos with the photographer. We will meet you there for food and drink!
                </div>
            </div>
        </div>
    )}

export default Ceremony