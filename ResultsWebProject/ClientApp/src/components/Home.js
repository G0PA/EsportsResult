import React, { Component } from 'react';
import maxresdefault from './Images/maxresdefault.jpg';
export class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);
    this.state = { hello: [], loading: true };

    fetch('api/MainPage/HelloThere').then(response => response.text())
        .then(data => this.setState({ hello: data, loading: false }));
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.state.hello

    return (        
        <div>
            <h1>{contents}</h1>      
      </div>
    );
  }
}
