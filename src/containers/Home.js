import React from 'react'
import { withSiteData, Link } from 'react-static'
//
import Button from '@material-ui/core/Button'
import Laptop from '../images/laptop.png'
import Analytics from '../images/analysis2.png'
import Wordpress from '../images/wordpress.png'
import Advertising from '../images/AdvertisingIcon.svg'
import SEO from '../images/SEOIcon.svg'
import Webdev from '../images/WebDev.svg'
import Background from '../images/Background.svg'
import '../css/home.css'
import Particles from 'react-particles-js'

// var secStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// }


export default withSiteData(() => (
  <div>
    <Particles width="100%" height="520px" className="particles" params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#777",
            blur: 5,
          }
        },
        number: { 
          value: 100,
           density: { 
             enable: true, 
             value_area: 946.9771699587272
            }
         },
         move: {
           speed: 3
         }
      },
      // interactivity: {
      //   mode: {
      //     grab: true,
      //   }
      // }
    }}
      style={{
        width: '100%',
        backgroundColor: 'rgba(4, 181, 239, .7);',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }} />
    <section id="welcome">
      <div id="container">
        <div className="leftText">
          <h1>The fastest websites in Oklahoma...</h1>
          <p>Paired with the world's most popular CMS. </p>
          <Link to="/about"><Button>See for yourself</Button></Link>
        </div>
        <div className="rightText">
          <img src={Laptop} />
        </div>
      </div>
    </section>
    <section id="panelTwo">
      <div className="container">
        <div id="left">
          <h1>Speed past the competition</h1>
          <p>Our framework loads only the critical HTML, CSS, data, and Javascript so your site loads as fast as possible. Once loaded, the framework prefetches resources for the other pages so clicking around the site feels incredibly fast. </p>
        </div>
        <div id="right">
          <img src={Analytics} />
        </div>
      </div>
    </section>
    <section id="panelThree">
      <div className="container">
        <div id="left">
          <img src={Wordpress} />
        </div>
        <div id="right">
          <h1>The world's most popular Content Management System. </h1>
          <p>Have one of the world's fastest sites without having any of the drawbacks. We feature full integration with wordpress - alowing you to edit content, adjust menus, add blogs, media, and more. </p>
        </div>
      </div>
    </section>
    <section id="services">
      <div className="container">
        <h1>Services we offer</h1>
        <p>Our goal is to provide a return on investment, and these services provide just that. </p>
        <div className="icons">
          <div id="adv">
            <img src={Advertising} />
            <p>Advertising</p>
            <p className="temp">Target your audience with google adwords, do a market analysis on your business, generate a custom logo, marketing strategy, and more. </p>
          </div>
          <div id="webdev">
            <img src={Webdev} />
            <p>Web Development</p>
            <p className="temp">We specialize in react and wordpress. Need a custom application built or a custom website? We can help. </p>
          </div>
          <div id="seo">
            <img src={SEO} />
            <p>Search Engine Optimization</p>
            <p className="temp">Load speed, keywords, google adwords, analytics, and social media will all be utilized in order to get you to the top of the search engines. </p>
          </div>
        </div>
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
))

// // particlesJS("particles-js", 
// { "particles": 
//   { "number": 
//     { "value": 189, "density":
//        { "enable": true, "value_area": 946.9771699587272 } },
//      "color": { "value": "#ffffff" },
//       "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;