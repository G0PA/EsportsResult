import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import leagueLogo from './Images/leagueLogo.jpg';
export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
      return (
          <Navbar inverse fixedTop fluid collapseOnSelect style={{ width: "15%" }}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Esports</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>            
            <LinkContainer to={'/leagueoflegends'}>
                        <NavItem>
                            <img style={{ width: 50, height: 50 }} src={leagueLogo} alt="League Of Legends" />
                            League of Legends
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
