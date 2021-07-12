import React, { useState} from 'react';

    function Attire () {
    
    
        const [isFlipped, addFlip] = useState(true);
        
        const toggleClass = () => {
            addFlip(!isFlipped);
          };
    
        return (
            <div class="deck ">
            <div class="card " className={isFlipped ? 'card': 'card flipped'} 
      onClick={toggleClass}>

                <h2 class="front">
                    <p>Dress Code</p>
                </h2>
                <h3 class="back">We will hold a small ceremony in the national forest. Please don't wear bright or bold colors that will clash with the natural environment and be prepared for PNW weather in the fall.</h3>
            </div>
        </div>
        )};

export default Attire
