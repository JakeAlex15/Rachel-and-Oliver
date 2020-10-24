import React from 'react'
import { Card } from 'reactstrap';
import waterbg from '../images/waves_05.mp4';

export default function Homepage() {
    return (
        <>
            <div className="jumbotron">
                <h1>Rachel and Oliver</h1>  
                <br />  
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

        {/* <div className="water-bg">
                <video className='videoTag' autoPlay loop muted>
                    <source src={waterbg} type='video/mp4' />
                </video>
        </div> */}

            <div className="first-set">
            <div className="cp-day-1"></div>
                <div className="card-day-1">  
                <div className="title">
                            
                        Pre-Wedding Schedule
                    <p className="subtitle">
                        November 9-10th, 2021
                    </p>
                    <p>
                    <br />
                        Dear Family and Friends, <br /> <br />
                        We are delighted to share with you this amazingly beautiful and special moment in our lives;
                        the celebration of our love! <br /> <br />
                        In order to prepare you for the big day, we have created this site where all of our wedding information will be shared. <br /> <br />
                        We can't wait, <br /> <br />
                        See you in Florida!! <br /> <br />
                        All Love, <br/>
                        </p>
                </div>
                </div>
            </div>
            </div>

            <div className="second-set">
                <span className="card-day-2">  
                <span className="title">
                        
                        The Big Day!
                        <p className="subtitle">
                        November 11th, 2021
                        </p>
                        <p>
                    <br />
                            Dear Family and Friends, <br /> 
                            We are delighted to share with you this amazingly beautiful and special moment in our lives;
                            the celebration of our love! <br /> <br />
                            In order to prepare you for the big day, we have created this site where all of our wedding information will be shared. <br /> <br />
                            We can't wait, <br /> <br />
                            See you in Florida!! <br /> <br />
                        </p>
                </span>
                </span>
                <span className="cp-day-2"></span>
            </div>
           
            {/* <div className="water-bg">
                <video className='videoTag' autoPlay loop muted>
                    <source src={waterbg} type='video/mp4' />
                </video>
            </div>  */}
        </>
    );
}

//routing
//spacing
//fill in 'day before' and 'day of' cards
//info card -- things to do, hotels, travel, rsvp (google form)
//domain name, shcedules, 
