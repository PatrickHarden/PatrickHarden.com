import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'

export default withSiteData(class SiteFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteCreator = this.props.siteCreator
        const siteCreatorURL = this.props.siteCreatorURL

        return (
<footer id="contact" class="footer">
   <div class="containerr">
      <h2 class="secondary-header">Looking to start a project?</h2>
      <a class="hero__link" href="mailto: patch2908@gmail.com">Let's talk.</a>
   </div>
   <div class="containerr">
      <ul class="social-list">
         <li class="social-list__item"><a href="https://github.com/PatrickHarden" target="_blank" class="social-list__item-link">GitHub</a></li>
         <li class="social-list__item"><a href="https://www.linkedin.com/in/patrick-harden-299a97154/" target="_blank" class="social-list__item-link">LinkedIn</a></li>
         <li class="social-list__item"><a href="ResumeSingle.pdf" target="_blank" class="social-list__item-link">Resume</a></li>
         {/* <li class="social-list__item"><Link to="/work" class="social-list__item-link">Work</Link></li> */}
         <li class="social-list__item"><Link to="/contact" class="social-list__item-link">Message</Link></li>
         <li class="social-list__item"><a href="mailto: patch2908@gmail.com" class="social-list__item-link">Email</a></li>
      </ul>
   </div>
</footer>
        )

    }
})