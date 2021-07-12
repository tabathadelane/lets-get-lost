import React, { useState} from 'react';

function Registry(){
    const [isFlipped, addFlip] = useState(true);
        
    const toggleClass = () => {
        addFlip(!isFlipped);
      };

    return (
        <div class="deck">
        <div class="card" className={isFlipped ? 'card': 'card flipped'} 
      onClick={toggleClass}>

            <h2 class="front">
                <p>Registry</p>
            </h2>
            <h3 class="back">If you are looking for a method to provide a wedding gift, one of the most helpful things you can do is gift some money towards the cost of the cabin rental. </h3>
        </div>
    </div>
    )}

export default Registry