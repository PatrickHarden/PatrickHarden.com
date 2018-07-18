import React from 'react'
import { withSiteData, Link } from 'react-static'
//
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Anal from '../images/analy2.png'
import Adword from '../images/Adword.png'
import Google from '../images/adwords.jpg'
import SEO from '../images/SEOIcon.svg'
import Webdev from '../images/WebDev.svg'
import Advertising from '../images/AdvertisingIcon.svg'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

export default () => (
  <div>
    <div className="serviceSection">
      <div className="container">
        <h1>Services</h1>
        <section id="SEO">
          <div id="left" className="padR">
            <h1>Search Engine Optimization</h1>
            <p>Our websites are optimized for SEO from the ground up. In addition to keywords, descriptions and analytics, we'll research your competitors and figure out the best approach to passing their spot on google.  </p>
          </div>
          <div id="right">
            <img src={Anal} />
          </div>
        </section>
        <section id="adwords">
          <div id="right" className="padL">
            <h1>Google Adwords</h1>
            <p>Help drive traffic to your site through the use of google adwords. Remember when you searched for something with google and you saw those ads at that top? We can do just that and help drive traffic to your site. </p>
          </div>
          <div id="left">
            <img src="https://i.imgur.com/FJaWF6N.jpg" />
          </div>
        </section>
        </div>
        <section id="grids">
        <h1>But wait, there's more! </h1>
        <div className="container">
          <Grid container spacing={24} className="serviceGrid">

            <Grid item xs={12} sm={4}>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              <p><strong>No long term contracts</strong></p>
              <p>We have flexible contracts that can suite a client's individual needs. If a client wants to move to another provider, we will insure the transition goes smoothly and expediently.   </p>
            </Grid>
            <Grid item xs={12} sm={4}>
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
              <p><strong>Social Media Advertising</strong></p>
              <p>Aside from Google Adwords, we have a lot of other ways in which to advertise your site. Advertise your website on different social media platforms and target your specific demographics. </p>
            </Grid>
            <Grid item xs={12} sm={4}>
            <i class="fa fa-window-restore" aria-hidden="true"></i>
              <p><strong>48 hour turnaround</strong></p>
              <p>Communication with our clients is integral to success. Any issues/inquiries you have, we'll respond to within 48 hours. </p>
            </Grid>
          </Grid>
          <Grid container spacing={24} className="serviceGrid 2nd">
            <Grid item xs={12} sm={4}>
            <i class="fa fa-lock" aria-hidden="true"></i>
              <p><strong>Security</strong></p>
              <p>We've never had a breach in security and our websites have a 99.9% uptime. We automatically create backups when you update a site, so restoration is easy and accessible.  </p>
            </Grid>
            <Grid item xs={12} sm={4}>
            <i class="fa fa-comments-o" aria-hidden="true"></i>
              <p><strong>Business developer consulting</strong></p>
              <p>We've been around for years and have experience in offering advice to Business owners. Having trouble arriving at a decision? Ask us and we'll let you know if what we think. </p>
            </Grid>
            <Grid item xs={12} sm={4}>
            <i class="fa fa-search" aria-hidden="true"></i>
              <p><strong>Search Engine Analysis</strong></p>
              <p>Every month we'll review your google analytics and formulate a way in which to further improve your impressions and conversions. </p>
            </Grid>
          </Grid>
</div>
        </section>

      </div>
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