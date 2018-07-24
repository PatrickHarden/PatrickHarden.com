import React from 'react'
import { withRouteData, Link, SiteData, withSiteData } from 'react-static'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import {Helmet} from "react-helmet";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
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