import React from 'react'
import { Link } from 'react-static'
import { Helmet } from "react-helmet";
//



export default () => (
  <article id="home">
    <Helmet>
      <body className="home" />
    </Helmet>

    <section className="hero">
      <div className="containerr">
        <h1 className="hero__title">I’m Patrick Harden, a <Link to="/work" className="hero__Link hero__link--second">designer</Link> and <a className="hero__link" target="_blank" href="https://github.com/PatrickHarden">web developer</a> living in Fort Worth, currently working as a freelancer.</h1>
      </div>
      <div className="containerr containerr--wrap">
        <div className="hero__employer hero__employer--steelseries">
          <h3 className="employer__label">Previously:</h3>
          <img id="imag" src="images/imaglogo.png" />
          <img id="am" src="images/am.png" />
          <img id="ex3" src="images/ex3New1Logo.png" />
          <img id="seed" src="images/SeedLogo.svg" />
        </div>
      </div>
      <div className="hero-background">
        <div className="rect"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
      </div>
    </section>

    <section id="work" className="work">
      <div className="containerr">
        <h2 className="secondary-header">Featured Work</h2>
      </div>
      <div className="featured-work-containerr">
      <Link to="/React-Static-Wordpress-v2" className="work-link work-link--50">
          <div className="work-link-wrapper">
            <img className="work-link-image" src="images/halcyon.png" />
            <div className="work-link-content">
              <h3 className="link-content__header">React-static Wordpress Framework v2</h3>
            </div>
          </div>
        </Link>
        <Link to="/expect3" className="work-link work-link--50">
          <div className="work-link-wrapper">
            <img className="work-link-image" src="images/ex3screen.png" />
            <div className="work-link-content">
              <h3 className="link-content__header">Expect3</h3>
            </div>
          </div>
        </Link>
      <Link to="/React-Static-Wordpress" className="work-link work-link--50">
          <div className="work-link-wrapper">
            <img className="work-link-image" src="images/wordpressscreen.png" />
            <div className="work-link-content">
              <h3 className="link-content__header">React-static Wordpress Framework</h3>
            </div>
          </div>
        </Link>
        <Link to="/React-Static-Website-Generator" className="work-link work-link--50">
          <div className="work-link-wrapper">
            <img className="work-link-image" src="images/awbscreen2.png" />
            <div className="work-link-content">
              <h3 className="link-content__header">React-static Website Generator</h3>
            </div>
          </div>
        </Link>
        <Link to="/lms" className="work-link work-link--50">
          <div className="work-link-wrapper">
            <img className="work-link-image" src="images/lmsscreen.png" />
            <div className="work-link-content">
              <h3 className="link-content__header">Lawyer Marketing Services</h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  
  </article>
)
