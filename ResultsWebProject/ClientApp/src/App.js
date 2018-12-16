import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {LeagueOfLegends} from './components/LeagueOfLegends';
export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route path='/' component={Home} />
        <Route path='/leagueoflegends' component={LeagueOfLegends} />

      </Layout>
    );
  }
}
