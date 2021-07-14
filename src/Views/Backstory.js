import React from 'react';
import photo from '../Assets/img/icecream.jpg'; // with import

function Backstory(){
    return (
        <div class="story">
            <h1 class="lost">Kitchen Kismet</h1>
            <img class="photo" alt="tabatha and richie on top of a mountain" src={photo} />
            <h3>Tabatha moved to Portland in February 2016; Richie soon after. That spring they were both hired by 10 Barrel Brewing Co as the pub prepared for their first big summer with the new patio. In July 2016, Pokemon Go was launched, so between slinging pizzas, catchin 'em all, and company kickball games, they found time to get to know each other over late night ice cream dates. Two years and two kittens later, they Instagram'd their ice cream adorned with the band of betrothal. They were engaged! Since then,  they've experienced one big promotion, one career change, one pandemic, and two D&D campaigns. 
            <br />
            Now finally, 2021 is the year! In the most private and intimate fashion, they are hiring a photographer and renting a cabin in the woods in October under a full moon to seal the deal. </h3>
        </div>
    )}

export default Backstory