import React from 'react'
import { Card } from 'reactstrap';
import waterbg from '../images/waves_05.mp4';

export default function Homepage() {
    return (
        <>
            
                <div className="jumbotron">
                    <h1>Rachel and Oliver</h1>    
                    <h3>November 11th, 2021 -- Key West, Flordia</h3>
                </div>
           
                <div className="main">
            
                <div className="note-container">
                           
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
                    <div className="water-bg">
                        <video className='videoTag' autoPlay loop muted>
                            <source src={waterbg} type='video/mp4' />
                        </video>
                    </div>

            <div className="flex-container">
                        <span className="card-day-1">  
                        <span className="title">
                            <br />          
                                Pre-Wedding Schedule
                       
                            <p className="subtitle">
                                November 9-10th, 2021
                            </p>
                        </span>
                        </span>
                        <span className="cp-day-1"></span>
                    </div>
             
                    <div className="flex-container">
                        <span className="card-day-2">  
                        <span className="title">
                            <br />          
                                The Big Day!
                       
                            <p className="subtitle">
                                November 11th, 2021
                            </p>
                        </span>
                        </span>
                        <span className="cp-day-2"></span>
                    </div>

                        <div className="water-bg">
                        <video className='videoTag' autoPlay loop muted>
                            <source src={waterbg} type='video/mp4' />
                        </video>
                    </div> 
            
            <div className="flex-container">
                        <div className="info">
                            <div className="info-text">
                                <h2> 
                                    <br />
                                    Information 
                                </h2>
                                <br />
                                <br />
                                    <a href="rsvp-form" className="activities-button">Activites</a> {/* https://www.tripadvisor.com/Attractions-g34345-Activities-Key_West_Florida_Keys_Florida.html */}
                                    <a href="rsvp-form" className="hotels-button">Hotels</a> {/* https://www.tripadvisor.com/Hotels-g34345-Key_West_Florida_Keys_Florida-Hotels.html */}
                                    <a href="rsvp-form" className="travel-button">Travel</a>
                                    <a href="rsvp-form" className="rsvp-button">RSVP</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

//routing
//spacing
//fill in 'day before' and 'day of' cards
//info card -- things to do, hotels, travel, rsvp (google form)
