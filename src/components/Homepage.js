import React from 'react'

export default function Homepage() {
    return (
        <>
        <a name="home"></a>
        <div className="jumbotron">
            <h1><span>Rachel and Oliver</span></h1> 
            <h3><span>November 11th, 2021 -- Key West, Flordia</span></h3>
        </div>
        <div className="main">
            <div className="note-container">
                <a name="welcome"></a>
                <p className="note-intro">
                    Dear Family and Friends, <br /> <br />
                    We are delighted to share with you this amazingly beautiful and special moment in our lives;
                    the celebration of our love! <br /> <br />
                    In order to prepare you for the big day, we have created this site where all of our wedding information will be shared. <br /> <br />
                    We can't wait, <br /> <br />
                    See you in Florida!! <br /> <br />
                    All Love, <br/>
                    Rachel and Oliver 
                </p>
            </div>

            <div className="first-set">
                <div className="cp-day-1"></div>
                <a name="schedules"></a>
                <div className="card-day-1">  
                    <div className="schedule"> 
                        <h5 className="schedule-title">General Information</h5>
                            <p className="schedule-itinerary">
                            <br />
                            <ul>
                                Welcome to Rachel and Oliver's Wedding Website! <br /> <br />
                                <li>This event has been rescheduled for November 11th, 2021 due to COVID-19 </li><br /> <br />
                                <li>The wedding will take place at The Southernmost Beach Resort in beautiful Key West, Florida </li><br /> <br />
                                <li>The wedding and ideal lodging are The Southernmost Beach Resort*</li> <br /> <br />
                                <li>There are plenty of activites in and around Key West before the wedding, and Key West International Airport is only 10 minutes away* </li><br /> <br />
                                <br />
                                *All of the links are available in the "information" bar at the bottom of the page
                            </ul>
                            </p>
                    </div>
                </div>
            </div>

            <div className="second-set">
                <div className="card-day-2">
                    <div className="schedule"> 
                        <h5 className="schedule-title">The Big Day!</h5>
                            <p className="schedule-date">November 11th, 2021</p>
                            <p className="schedule-itinerary">
                            <br />
                               <ul>
                                    <li>
                                        Start: 4:30pm <br />
                                        End: 5:00pm <br />
                                        Location: Ocean Front Beach <br />
                                        Function: Ceremony <br />
                                    </li>
                                    <br />
                                    <li>
                                        Start: 5:00pm* <br />
                                        End: 6:00pm <br />
                                        Location: Sandbar <br />
                                        Function: Cocktail Hour <br />
                                    </li>
                                    <br />
                                    <li>
                                        Start: 6:00pm <br />
                                        End: 8:00pm <br />
                                        Location: Ocean Front Beach <br />
                                        Function: Reception <br />
                                    </li>
                                    <br />
                                    <br />
                                    *5:42pm Sunset
                               </ul>
                            </p>
                    </div> 
                </div>  
                <div className="cp-day-2"></div>
            </div>
            <div className="info-container">
            <div className="info">
            <div className="info-text">
                        <div name="information" id="information">Information</div> 
                    <br />
                   
                        <a href="https://www.tripadvisor.com/Attractions-g34345-Activities-Key_West_Florida_Keys_Florida.html" target="_blank" id="#activities" className="activities-button">Activites</a> 
                        <a href="https://nam01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fsouthernmostbeachresort.reztrip.com%2Fext%2FpromoRate%3Fproperty%3D729%26mode%3Db%26pm%3Dtrue%26sr%3D585268%26vr%3D3%26accessCode%3DFAMILYAFFAIR&data=02%7C01%7C%7C1857dd49b80945d92daa08d8089e6a3a%7C3b290724ee0b4b3a88d66a1172257251%7C1%7C0%7C637268823784405097&sdata=flama2qc594kLtf4VLw2YZk3gvyjpvq6ECKebqRIZ9E%3D&reserved=0" target="_blank" id="#hotels" className="hotels-button">Hotels</a> 
                        <a href="https://eyw.com/" target="_blank" id="#travel" className="travel-button">Travel</a>
                        <a href="https://forms.gle/PrqLqi275w5qtri97" target="_blank" id="#RSVP" className="rsvp-button">RSVP</a>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

//routing
//info card -- things to do, hotels, travel, rsvp (google form)
//https://docs.google.com/forms/d/1g5aLWJqpFOTORj7MS9CpBWTCalJ1arjZSJPoTBaxc6M/edit

