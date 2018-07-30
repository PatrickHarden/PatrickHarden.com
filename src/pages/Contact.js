import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Helmet} from "react-helmet";
import ContactForm from '../sections/ContactForm'


export default () => (
  <article id="contact">
    <Helmet>
      <body className="contact" />
    </Helmet>
    <div className="containerr">
      <Row>
        <Col xs="12">
          <h1>Contact</h1>
          <ContactForm />
        </Col>
      </Row>
    </div>
  </article>
  
)