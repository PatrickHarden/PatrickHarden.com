import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import MenuList from 'MenuItems'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col } from 'reactstrap';
import Logo from './images/Screenshot_3.png'

 export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const logo = this.props.options.companyLogo

    return (
      <div className="navWrapper">
        <Navbar color="white" dark fixed="top" expand="md">
            <Container>
                <Row>
                    <Col xs="3">
                        <NavbarBrand href="/">Patrick Harden</NavbarBrand>                      
                    </Col>
                    <Col xs="9" className="text-right">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/work" className="nav-link">Work</Link>
                            </NavItem>
                            {/* <MenuList /> */}
                            <NavItem>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
      </div>
    );
  }
})