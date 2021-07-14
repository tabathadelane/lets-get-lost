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
                <p>Social Media</p>
            </h2>
            <h3 class="back">
                A reminder that this is an elopement. 
                <br /><br />
               Please refrain from mentioning/posting our wedding on social media until after we have announced it to family/friends ourselves. 
            </h3>
        </div>
    </div>
    )}

export default Weekend