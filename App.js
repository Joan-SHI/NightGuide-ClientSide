import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'

import Login from './src/components/Landing'
import Home from './src/components/Home'
import LookoutList from './src/components/LookoutList'
import LookoutDetails from './src/components/LookoutDetails'
import ConstellationList from './src/components/ConstellationList'
import ConstellationDetails from './src/components/ConstellationDetails'
import Weather from './src/components/Weather'
import PlanetList from './src/components/PlanetList'
import PlanetDetails from './src/components/PlanetDetails'
import StarMap from './src/components/StarMap'



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            initial
            hideNavBar={true}
          />
          <Scene
            key="home1"
            component={Home}
            title="Home"
          />
          <Scene
            key="home2"
            component={Home}
            title="Home"
          />
          <Scene
            key="lookout"
            component={LookoutList}
            title="Lookout"
          />
          <Scene
            key="lookoutdetails"
            component={LookoutDetails}
            title="LookoutDetails"
          />
          <Scene
            key="stars"
            component={ConstellationList}
            title="Constellation"
          />
          <Scene
            key="constellationdetails"
            component={ConstellationDetails}
            title="ConstellationDetails"
          />
          <Scene
            key="planet"
            component={PlanetList}
            title="Planet"
          />
          <Scene
            key="planetdetails"
            component={PlanetDetails}
            title="PlanetDetails"
          />
          <Scene
            key="weather"
            component={Weather}
            title="Weather"
          />
          <Scene
            key="starmap"
            component={StarMap}
            title="StarMap"
          />
         
          
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
