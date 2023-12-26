import React from 'react'
import './Footerstyle.css'

const Footer = () => {
  return (
    <div id='footerdivision'>
        <div className="container" id='footerdiv'>
            <div className="row">
            <div className="col-md-3">
                    <h3>HostelBook</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quibusdam!
                    </p>
                </div>
                <div className="col-md-3">
                    <h3>Quick Links</h3>
                    <nav className='footerdivlist'>
                    <ul>
                       <li >Home</li>
                       <li>Rooms</li>
                       <li>About</li>
                       <li>Contact us</li>
                    </ul>
                    </nav>
                </div>
                <div className="col-md-3">
                    <h3>Contact Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quibusdam!
                        <br />
                        adipisicing elit.
                        Quisquam, quibusdam!
                    </p>
                </div>
                <div className="col-md-3" id='innderfooter'>
                    <h3>Follow Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quibusdam!
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer