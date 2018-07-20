import React from 'react'
import { withSiteData, Link } from 'react-static'
import { Helmet } from "react-helmet";
//
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import LazyHero from 'react-lazy-hero';
import ContactForm from '../sections/ContactForm'



export default withSiteData(() => (
  <article id="home">
    <Helmet>
      <body className="home" />
    </Helmet>
    <section class="hero">
   <div class="container">
      <h1 class="hero__title">I’m Patrick Harden, a <Link to="/work" class="hero__Link hero__link--second">designer</Link> and <a class="hero__link" target="_blank" href="https://github.com/PatrickHarden">web developer</a> living in Tulsa, currently working as a freelancer.</h1>
   </div>
   <div class="container container--wrap">
      <div class="hero__employer hero__employer--steelseries">
         <h3 class="employer__label">Previously:</h3>
          <img id="ex3" src="images/ex3New1Logo.png" />
          
          <img id="lms" src="images/lmsLogo.png" />
          <img id="seed" src="images/SeedLogo.svg" />
      </div>
   </div>
   <div class="hero-background">
      <div class="rect"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
   </div>
</section>
  
    <section id="work" class="work">
   <div class="container">
      <h2 class="secondary-header">Featured Work</h2>
   </div>
   <div class="featured-work-container">
      <a href="https://github.com/PatrickHarden/React-Static-Bootstrap-Template" class="work-link work-link--50">
         <div class="work-link-wrapper">
            <img class="work-link-image" src="images/wordpressscreen.png" />
            <div class="work-link-content">
               <h3 class="link-content__header">React-static + Wordpress Framework</h3>
            </div>
         </div>
      </a>
      <a href="https://github.com/PatrickHarden/React-Static-Website-Builder" class="work-link work-link--50">
         <div class="work-link-wrapper">
            <img class="work-link-image" src="images/awbscreen.png" />
            <div class="work-link-content">
               <h3 class="link-content__header">React-static Website Generator</h3>
            </div>
         </div>
      </a>
      <a href="https://github.com/PatrickHarden/expect3" class="work-link work-link--50">
         <div class="work-link-wrapper">
            <img class="work-link-image" src="images/ex3screen.png" />
            <div class="work-link-content">
               <h3 class="link-content__header">Expect3</h3>
            </div>
         </div>
      </a>
      <a href="https://github.com/PatrickHarden/lawyermarketingusa" class="work-link work-link--50">
         <div class="work-link-wrapper">
            <img class="work-link-image" src="images/lmsscreen.png" />
            <div class="work-link-content">
               <h3 class="link-content__header">Lawyer Marketing Services</h3>
            </div>
         </div>
      </a>
   </div>

</section>
  </article>
))
