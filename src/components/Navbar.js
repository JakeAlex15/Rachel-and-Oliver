import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <a href="#welcome">Welcome</a>
                    </li>
                    <li>
                        <a href="#schedules">Schedules</a>
                    </li>
                    <li>
                        <a href="#info">Information</a>
                    </li>
                    <li>
                        <a href="#rsvp">RSVP</a>
                    </li>
                </ul>
            </nav>
        );
    }
}