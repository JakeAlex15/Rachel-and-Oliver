import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return(
            <div id="navbar">
            <a href="#welcome">Welcome</a>
            <a href="#schedules">Schedules</a>
            <a href="#info">Information</a>
            <a href="#rsvp">RSVP</a>
          </div>
        );
    }
}