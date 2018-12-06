import React from "react";
import { Text, View } from "react-native";
import planets from "../../data/planets";
import { List, ListItem } from "react-native-elements";

export default class PlanetList extends React.Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {planets.map(planet => (
            <ListItem
            roundAvatar
              avatar={{ uri: planet.image }}
              key={planet.name}
              title={planet.name}
              />
          ))}
        </List>
      </View>
    );
  }
}
