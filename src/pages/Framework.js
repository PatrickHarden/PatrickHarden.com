import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { withRouteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
//

export default () => (
  <div>
        <Helmet>
      <body className="framework" />
    </Helmet>
<section>
   <div class="container">
   <div class="project-hero">
         <header class="hero-header">
            <h1 class="project-label">React-static Wordpress Framework</h1>
             <a href="https://github.com/PatrickHarden/React-Static-Bootstrap-Template" class="btn project-title" target="_blank">View Source</a>
         </header>
      </div>
      <div class="lede-content">
        <p class="step-body nTop">Although React-static is a radically fast framework, it in itself wasn't adequate enough for our clients' needs. The clients required access to a content management system in order to alter forms, blogs, staff, ect. However, determined not to be binded to wordpress, I pioneered a framework of my own, combining the speed and expandability of react-static with the cms functionality of wordpress. </p>
        <p class="step-body mTop">React-staic excels at generating static sites from JSON data. Check out how the JSON data is pulled from wordpress and dispersed to the sub-components.</p>
     </div>

     <div class="inline-image"><img src="images/Framework.png" /></div>

   </div>
         <div class="container">
     <div class="lede-content">
        <p class="step-body sTop">Wordpress's Rest API is enabled by default, so those JSON pulls from the pages and posts would occur without conflict - you could even pull the latest stories from a local news site if they use wordpress. </p>
        <p class="step-body sTop ssTop">The rest of the trickery is enabled by a custom wordpress plugin. It creates new custom post types and a deploy button which allows the user to trigger a new yarn/npm build command from wordpress. Additionally, an AWS offload plugin is installed, which converts uploaded media to URLs, which then enables users to add media from wordpress. </p>
     </div>
     </div>
   <div class="project-step">
      <div class="container">

      </div>
   </div>

<div class="project-links">
<Link to="/" class="project-link project-link--first" >
    <span class="project-link__text">Return Home</span>
 </Link>
<Link to="/React-Static-Website-Generator" class="project-link project-link--last">
    <span class="project-link__text">Next Project</span>
    </Link>
</div>
</section>
  </div>
)
