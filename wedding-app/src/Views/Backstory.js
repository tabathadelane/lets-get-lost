import React from 'react';
import photo from '../Assets/img/13895039_580580195454912_3797028826305113018_n.jpg'; // with import

function Backstory(){
    return (
        <div class="story">
            <h2 class="lost">Let's Get Lost</h2>
            <img class="photo" alt="tabatha and richie on top of a mountain" src={photo} />
            <h3>This is a cute story about our relationship</h3>
        </div>
    )}

export default Backstory