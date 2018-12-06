import React from "react";
import { Text, View } from "react-native";

import BrooklynMap from "./src/components/BrooklynMap";
import ConstellationDetails from "./src/components/ConstellationDetails";
import ConstellationList from "./src/components/ConstellationList";
import Header from "./src/components/Header";
import InstructionContainer from "./src/components/InstructionContainer";
import Landing from "./src/components/Landing";
import MenuInstruction from "./src/components/MenuInstruction";
import NavBar from "./src/components/NavBar";
import NightGuideLogo from "./src/components/NightGuideLogo";
import PlanetDetails from "./src/components/PlanetDetails";
import PlanetList from "./src/components/PlanetList";
import Weather from "./src/components/Weather";
import WelcomeInstruction from "./src/components/WelcomeInstruction";
import planets from "./data/planets";

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <BrooklynMap />
        <ConstellationDetails />
        <ConstellationList /> */}
        {/* <Header />
        <InstructionContainer />
        <Landing />
        <MenuInstruction />
        <NavBar />
        <NightGuideLogo />
        <PlanetDetails /> */}
        <PlanetList />
        {/* <Weather />
        <WelcomeInstruction /> */}
      </View>
    );
  }
}
