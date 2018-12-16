import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import leagueWallpaper from './Images/leagueWallpaper.jpg'
import { NavLink } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export class LeagueOfLegends extends Component {
  displayName = LeagueOfLegends.name

  constructor(props) {
    super(props);
    this.state = { hello: [], loading: true};

    fetch('api/LeagueOfLegends/HelloLeague').then(response => response.text())
        .then(data => this.setState({ hello: data, loading: false }));
  }

  render() {
      let style = {
          backgroundColor: "dimGrey",
          fontStyle: "italic",
          color: "AliceBlue"
      };
      let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : this.state.hello

      return (
          <div style={style}>
              <h1 style={{ textAlign: "center" }}>Regions</h1>
            <ListGroup>
                <ListGroupItem bsStyle="info" href="/asd"> <h2>EU LCS</h2>
                      </ListGroupItem>
                <ListGroupItem bsStyle="danger" href="/asd"> <h2>NA LCS</h2></ListGroupItem>
                <ListGroupItem bsStyle="warning" href="/asd"> <h2>LCK</h2></ListGroupItem>
                      <ListGroupItem bsStyle="success" href="/asd"> <h2>LPL</h2></ListGroupItem>
            </ListGroup>
            </div>
    );
  }
}