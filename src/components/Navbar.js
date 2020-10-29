import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return(
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Welcome</a>
                <a href="#schedules">Schedules</a>
                <a href="#information">Information</a>
                <a href="https://docs.google.com/forms/d/1g5aLWJqpFOTORj7MS9CpBWTCalJ1arjZSJPoTBaxc6M/" target="_blank" >RSVP</a>
                {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fas fa-bars"></i>
                </a> */}
          </div>
        );
    }
}
