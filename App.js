import React from "react";
import { Text, View } from "react-native";

import PlanetList from "./src/components/PlanetList";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <PlanetList />
      </View>
    );
  }
}
