import React from 'react'
//
import TextFields from './ContactForm'
import { withSiteData, Link } from 'react-static'
import Paper from '@material-ui/core/Paper'

export default () => (
  <div className="contactRoot">
      <Paper className="contactPage">
      <section className="contactH1">
        <h1>Contact us</h1>
    </section>
    <section className="contact ">
        <div className="col3" >
        <TextFields />
        </div>
        <div className="col3" >
        <p className="mtop"><strong>Address:</strong></p>
        <p>3104 S Elm Pl Suit C<br />
        Broken Arrow, OK 74013 </p>      
        </div>
        <div className="col3" >
        <p className="mtop"><strong>Phone:</strong></p>
        <p><a href="tel:1-918-379-9400">918-379-9400</a></p>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.99781825454!2d-95.80136888473184!3d36.02034668011664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68d420d455c81%3A0xd3873b56c7fe287d!2seXpect3+Digital+Media+Agency!5e0!3m2!1sen!2sus!4v1528129089560" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
        </div>
    </section>
    </Paper>
    <section id="footer">
      <div className="container">
        <div className="col3">
        <a href="#top"><p>Go back up ^</p></a>
        </div>
        <div className="col6">
          <Link to="/">Home </Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </section>
  </div>
)
