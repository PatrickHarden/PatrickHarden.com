import React from 'react'
//
import { withSiteData, Link } from 'react-static'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import SimpleMediaCard from './Card'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import Logo from '../images/download.png'

export default () => (
  <div>
    <div className="about">
      <div class="container">
        <h1>
          Future-proof your website
    </h1>
        <p>
          Don't build a website with last decade's tech.
    </p>
      </div>
    </div>
    {/* The future of the web is mobile, JavaScript and APIs. With us every website is a web app and every web app is a website. */}
    {/* <section id="speed">
      <div class="container">
        <h1>Speed matters...</h1>
        <p>Website speed has a major impact on how google index's websites. </p>
      </div>
    </section>
    <section id="philosophy">
      <div class="container">
        <h1>Our design philosophy</h1>
        <p>The goal behind our designs is to make the user think as little as possible. Whitespace, visuals, familiar architecture, and simplicity helps us accomplish this. </p>
      </div>
    </section> */}
    <section id="features" >
      <div className="container" >
        <h1>Features of our websites</h1>
        <p>Simple and savvy feature set included with every website</p>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={2}>
            <i class="fa fa-lock"></i>
            </Grid>
            <Grid item xs={12} sm={10}>
            <p><strong>SSL Included</strong></p>
            <p>Https is becoming more and more ubiquituous and we will continue to further that trend by including SSL's with every site we sell. </p>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={2}>
            <i class="fa fa-globe"></i>
            </Grid>
            <Grid item xs={12} sm={10}>
            <p><strong>Scale to the internet</strong></p>
            <p>Our hosting includes a global CDN, a content delivery network, so your site will load incredibly fast, from anywhere in the world.</p>
        </Grid>
        </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={2}>
                <img src={Logo} />
              </Grid>
              <Grid item xs={12} sm={10}>
                <p className="noMTop"><strong>Built on React</strong></p>
                <p>We build our websites using React - the same framework which Facebook, Instagram, and Imgur utilize. This means that your website will have great potential for expandability and a smooth user interface. </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={2}>
            <i class="fa fa-edit"></i>
            </Grid>
            <Grid item xs={12} sm={10} >
            <p><strong>CMS Integration</strong></p>
            <p>We integrate our websites with Wordpress so you can edit/adjust content however you'd like. You can edit the navigation, adjust the layout of content, upload/change media, edit the contact forms, run a blog, and more. </p>
         </Grid>
         </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
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
