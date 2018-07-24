import React from 'react'
import { withRouteData, Link, SiteData, withSiteData } from 'react-static'
import { Container, Row, Col } from 'reactstrap'
import {Helmet} from "react-helmet";
import ContactForm from '../sections/ContactForm'


export default () => (
  <article id="contact">
    <Helmet>
      <body className="contact" />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Contact</h1>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </article>
  
)