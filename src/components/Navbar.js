import React, { useState } from 'react';

function Navbar() {
    const [open , setOpen] = useState(false);
    return (
        <div>
            <nav>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "" }}>
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
                <i onClick={() => setOpen(!open)} id="burger" className="fas fa-bars"></i>
            </nav>
        </div>
    )
}

export default Navbar;



// var icon = document.querySelector( '#nav-ul' );
// var checkbox = document.querySelector( '#check' );
// var listener = function( e ) {
//   if( e.target != checkbox && e.target != icon ) {
//     checkbox.checked = false;
//     document.removeEventListener( 'click', listener );
//   }
// };

// checkbox.addEventListener( 'click', function(){
//   if( this.checked ) {
//     document.addEventListener( 'click', listener );
//   } 
// });


//________________________________________________________________

// let navUI = document.querySelector('#nav-ul');
// let check = document.querySelector('#check');
// navUI.addEventListener('click', () => {
//     check.checked = !check.checked;
//   });



