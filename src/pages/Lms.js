import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { withRouteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
//

export default () => (
  <div>
        <Helmet>
      <body className="lms" />
    </Helmet>
<section>
   <div class="container">
      <div class="project-hero Jcenter">
         <header class="hero-header">
            <h1 class="project-label">Lawyer Marketing Services</h1>
             <a href="https://lawyermarketingusa.com/" class="btn project-title mRight" target="_blank">Visit site</a>
            <a href="https://github.com/PatrickHarden/lawyermarketingusa" class="btn project-title" target="_blank">View source</a>
         </header>
      </div>
      <div class="inline-image"><img src="images/lmsfull.png" /></div>
   </div>
<div class="project-links">
<Link to="/" class="project-link project-link--first" >
    <span class="project-link__text">Return Home</span>
 </Link>
<Link to="/expect3" class="project-link project-link--last" href="/engine.html">
    <span class="project-link__text">Next Project</span>
    </Link>
</div>
</section>
  </div>
)
