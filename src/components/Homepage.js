import React from 'react'
import { Card } from 'reactstrap';
import waterbg from '../images/waves_05.mp4';

export default function Homepage() {
    return (
        <>
            <Card>
                <div className="jumbotron">
                    <h1>Rachel and Oliver</h1>    
                    <h3>November 1st, 2021 -- Key West, Flordia</h3>
                </div>
            </Card>
                <div className="main">
            <Card>
                <div className="note-container">
                            <span className="intro1">
                                <p>
                                    Dear Family and Friends, <br /> <br />
                                </p>
                            </span>
                            <span className="intro2">
                                <p>
                                    We are delighted to share with you this amazingly beautiful and special moment in our lives;
                                    the celebration of our love! <br /> <br />
                                </p>
                            </span>
                            <span className="intro2">
                                <p>
                                    In order to prepare you for the big day, we have created this site where all of our wedding information will be shared. <br /> <br />
                                </p>
                            </span>
                            <span className="intro2">
                                <p>
                                    We can't wait, <br /> <br />
                                    See you in Florida!! <br /> <br />
                                </p>
                            </span>
                            <span className="intro3">
                                <p>
                                    All Love, <br/>
                                    Rachel and Oliver 
                                </p>
                            </span>
                </div>   
            </Card>  

                        <video className='videoTag' autoPlay loop muted>
                            <source src={waterbg} type='video/mp4' />
                        </video>

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

                        <video className='videoTag' autoPlay loop muted>
                            <source src={waterbg} type='video/mp4' />
                        </video>
                    
            <div className="flex-container">
                        <div className="info">
                            <div className="info-text">
                                <h2> 
                                    <br />
                                    Information 
                                </h2>
                                <br />
                                <br />
                                    <a href="rsvp-form" class="rsvp-button">Activites</a>
                                    <a href="rsvp-form" class="rsvp-button">Hotels</a>
                                    <a href="rsvp-form" class="rsvp-button">Travel</a>
                                    <a href="rsvp-form" class="rsvp-button">RSVP</a>
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
