import React from "react";
import { Text, View } from "react-native";
import planets from "../../data/planets";

const PlanetList = props => {
  return (
    <View>
      {props.planets.map(planet => {
        return <li key={i}>{planet.name}</li>;
      })}
    </View>
  );
};

export default PlanetList;
