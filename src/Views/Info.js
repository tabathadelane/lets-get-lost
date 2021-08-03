import React from 'react';
import photo from '../Assets/img/13895039_580580195454912_3797028826305113018_n.jpg'; // with import

function Backstory(){
    return (
        <div class="story">
            <h1 class="lost">Let's Get Lost</h1>
            <img class="photo" alt="tabatha and richie on top of a mountain" src={photo} />
            <h2>The Guest List</h2>
            <h3>Again, this is an elopement, so there will not be a crowd of people or stuffy wedding formalities going on aside from a ceremony. There will be a total of 7 of us in the cabin over the weekend. Richie has invited his childhood best friend, Greg, and his dad, Rick, with his partner Carol Ann. Tabatha is inviting her brother, Austin, with his partner Natalie.</h3>
            <h2>The Schedule</h2>
            <h3>We have the cabin for a few days, but on Saturday and Sunday, there is no solid schedule. We can do this however we want! We do ask that you communicate to us your plans closer to the trip. Are you taking a day trip to Seattle or a National Park? Should we do something as a group? Feel free to share ideas. </h3>
            <h2>The Menu</h2>
            <h3>One important reason we ask about plans is so we can come up with a menu for the weekend. We don't mind cooking dinners and maybe grabbing some sandwich fixins for everyone, but a headcount would be very important. We plan to make a big trip to a local grocery store on our way in. Please feel free to grab any snacks or drinks for yourself that you would want. Reach out if you have any dietary concerns we should know about. Richie should be able to procure a pony keg from 10 Barrel. The cabin has a full kitchen and a grill. If by chance someone has a menu request or wants to cook a meal, please let us know! Otherwise, we are winging it!</h3>
            <h3>On the evening after the ceremony, Greg is making carnitas tacos! So that plan is taken care of. If someone cannot eat pork, please let us know. </h3>
            <h2>Photographs</h2>
            <h3>The priority within our budget was the photographer. This day is about making memories, and the photos are the living reminders. I have to note that our contract with the photographer prohibits personal photos during the ceremony. Someone using a cellphone camera is not a very appealing look in a photo, and we are paying him to make sure our photos are beautiful. There will be lots of opportunites for selfies, and everyone will have access to the photo gallery when it's ready. </h3>
            <br/>
            <div class="timeline"></div>
            <h2>Wedding Day Timeline</h2>
            <table class="table">
                
                <tbody>
                    <tr>
                    <th scope="row">12:30 PM</th>
                    <td>Getting Ready Photos</td>
                    </tr>
                    <tr>
                    <th scope="row">1:30 PM</th>
                    <td>First Looks Photos</td>
                    </tr>
                    <tr>
                    <th scope="row">1:50 PM</th>
                    <td>Leave for Hoh Rainforest (1hr 10min drive)<br/>We will take our own car, and everyone else can carpool in a sperate vehicle</td>
                    </tr>
                    <tr>
                    <th scope="row">3:15 PM</th>
                    <td>Ceremony & photos with guests</td>
                    </tr>
                    <tr>
                    <th scope="row">4:00 PM</th>
                    <td>Pack up. Guests head back to AirBnB, while we take more photos.</td>
                    </tr>
                    <tr>
                    <th scope="row">~7:00 PM</th>
                    <td>Everyone meet back at the cabin for dinner!</td>
                    </tr>
                </tbody>
                </table>
            

            <br/>
            <br/>
            Built and Designed by Tabatha Delane ©2021    •    Last Updated: Mon Aug 2, 2021

        </div>
    )}

export default Backstory
