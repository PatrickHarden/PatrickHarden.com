import React from 'react'
import { withRouteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
//

export default () => (
  <div>
        <Helmet>
      <body className="awb" />
    </Helmet>
<section>
   <div class="container">
   <div class="project-hero">
         <header class="hero-header">
            <h1 class="project-label">React-static website generator</h1>
             {/* <a href="https://expect3.com" class="btn project-title mRight" target="_blank">Visit site</a> */}
             <a href="https://github.com/PatrickHarden/React-Static-Website-Builder" class="btn project-title" target="_blank">View source</a>
         </header>
      </div>
      <div class="lede-content">
        <p class="step-body nTop">"Attorney web builder" was a project which was in development prior to me joining the company. After discovering how adeptly react-static could handle JSON data, we decided to refactor "AWB" to generate react-static sites instead - and we were successfully able to pull it off. Instead of pulling JSON data from a wordpress site, JSON is pulled instead from a Laravel/Spark application. </p>
        <p class="step-body mTop">I lent hand in aiding with the development of the controller responsible for communicating with <a href="https://www.netlify.com/Netlify" target="_blank" >Netlify</a> seen here:</p>
     </div>
      <div class="inline-image"><img src="images/awbcode2.png" /></div>
   </div>
   <div class="container">
     <div class="lede-content">
        <p class="step-body sTop">The Laravel application generates JSON data unique to each user ID. That user ID is then sent to <a href="https://www.netlify.com/Netlify" target="_blank" >Netlify</a> in a build command so that react-static will pull in JSON from that target url + userID. </p>
        <p class="step-body sTop ssTop">Prior to building the website though, the user will enter in a lot of client information and select a template, which ultimately is converted and broadcasted as JSON. </p>
     </div>
     </div>
<div class="project-links">
<Link to="/" class="project-link project-link--first" >
    <span class="project-link__text">Return Home</span>
 </Link>
<Link to="/lms" class="project-link project-link--last">
    <span class="project-link__text">Next Project</span>
    </Link>
</div>
</section>
  </div>
)
