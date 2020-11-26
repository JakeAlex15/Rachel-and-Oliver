import React, { Component } from 'react';

let navUI = document.querySelector("#nav-ul");
let check = document.querySelector("#check");

navUI.addEventListener("click", () => {
    check.checked = !check.checked;
});

export default class Navbar extends Component {
    render() {
        return(
            <nav>
                <input type="checkbox" id="check"></input>
                <label for ="check" className="checkbtn">
                <i class="fas fa-bars"></i>
                </label>
            <ul id="nav-ul">
            <li>
                <a href="#welcome" className="active">Welcome</a>
            </li>
            <li>
                <a href="#schedules">Schedules</a>
            </li>
            <li>
                <a href="#information">Information</a>
            </li>
            <li>
            <a href="https://forms.gle/PrqLqi275w5qtri97" target="_blank" id="#RSVP">RSVP</a>
            </li>
        </ul>
        </nav>
        );
    }
}



