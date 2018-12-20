import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import leagueWallpaper from './Images/leagueWallpaper.jpg'
import { NavLink } from 'react';
import { ListGroup, ListGroupItem, Tab, Col, Row, MenuItem, NavDropdown } from 'react-bootstrap';
export class LeagueOfLegends extends Component {
    displayName = LeagueOfLegends.name

    constructor(props) {
        super(props);
        this.state = { items: [], loading: true };

    }
    componentDidMount() {
        fetch('api/LeagueOfLegends/HelloLeague').then(response => response.json())
            .then(data => {
                this.setState({ items: data, loading: false });
            });

    }

    static renderResultTable(data) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>{data.GameName}</th>
                        <th>HomeTeam</th>
                        <th>AwayTeam</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(game =>
                        <tr key={game.GameName}>
                            <td>{game.HomeTeam}</td>
                            <td>{game.AwayTeam}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }


    render() {
        let style = {
            backgroundColor: "darkslategray",
            fontStyle: "italic",
            color: "AliceBlue"
        };
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : LeagueOfLegends.renderResultTable(this.state.items);

            return (
                <div>
                    <h2> {contents}</h2>
                    <h2> {this.state.items.GameName}</h2>

                    <Tab.Container style={style} id="tabs-with-dropdown" defaultActiveKey="first">
                        <Row className="clearfix">
                            <Col sm={12}>
                                <Nav bsStyle="tabs">
                                    <NavDropdown title="EU LCS">
                                        <MenuItem eventKey="EUResults">Results</MenuItem>
                                        <MenuItem eventKey="EUUpcoming">Upcoming</MenuItem>
                                    </NavDropdown>
                                    <NavDropdown title="NA LCS">
                                        <MenuItem eventKey="NAResults">Results</MenuItem>
                                        <MenuItem eventKey="NAUpcoming">Upcoming</MenuItem>
                                    </NavDropdown>
                                    <NavDropdown title="LCK">
                                        <MenuItem eventKey="LCKResults">Results</MenuItem>
                                        <MenuItem eventKey="LCKUpcoming">Upcoming</MenuItem>
                                    </NavDropdown>
                                    <NavDropdown title="LPL">
                                        <MenuItem eventKey="LPLResults">Results</MenuItem>
                                        <MenuItem eventKey="LPLUpcoming">Upcoming</MenuItem>
                                    </NavDropdown>
                                </Nav>
                            </Col>
                            <Col sm={12}>
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="EUResults">Fnatic win EU LCS</Tab.Pane>
                                    <Tab.Pane eventKey="EUUpcoming">Fnatic vs G2</Tab.Pane>
                                    <Tab.Pane eventKey="NAUpcoming">TSM vs Liquid</Tab.Pane>
                                    <Tab.Pane eventKey="NAResults">Liquid win NA LCS</Tab.Pane>
                                    <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
                                    <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            );       
    }
}