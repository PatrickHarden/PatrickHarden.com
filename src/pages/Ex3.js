import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { withRouteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
//

export default () => (
  <div>
        <Helmet>
      <body className="expect3" />
    </Helmet>
<section>
   <div class="container">
      <div class="project-hero Jcenter">
         <header class="hero-header">
            <h1 class="project-label">expect3 digitial marketing agency</h1>
             <a href="https://expect3.com" class="btn project-title mRight" target="_blank">Visit site</a>
             <a href="https://github.com/PatrickHarden/expect3" class="btn project-title" target="_blank">View source</a>
         </header>
      </div>
      <div class="inline-image"><img src="images/ex3full.png" /></div>
   </div>

<div class="project-links">
<Link to="/" class="project-link project-link--first" >
    <span class="project-link__text">Return Home</span>
 </Link>
<Link to="/React-Static-Wordpress" class="project-link project-link--last">
    <span class="project-link__text">Next Project</span>
    </Link>
</div>
</section>
  </div>
)
