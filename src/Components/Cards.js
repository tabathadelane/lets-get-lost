import React from 'react';
import {Link} from "react-router-dom";

function Cards(){
    

    return (
        <div>
            <div>
                <Link to="/what-to-wear">Dress Code</Link>    
            </div>
            <div>
                <Link to="/ceremony">Ceremony Itinerary</Link>    
            </div>
            <div>
                <Link to="/what-to-eat">Food & Drink</Link>    
            </div>
            <div>
                <Link to="/where-were-staying">AirB&B Details</Link>    
            </div>
            <div>
                <Link to="/gifts">Registry Info</Link>    
            </div>
            <div>
                <Link to="/what-to-do">Weekend Plan</Link>    
            </div>
            <div>
                <Link to="/">Close</Link>    
            </div>
        </div>
    )}

export default Cards