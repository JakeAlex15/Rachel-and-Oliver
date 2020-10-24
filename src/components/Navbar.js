import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return(
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Welcome</a>
                <a href="#schedules">Schedules</a>
                <a href="#information">Information</a>
                <a href="#RSVP">RSVP</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fas fa-bars"></i>
            </a>
          </div>
        );
    }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }