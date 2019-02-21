import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

const instructions = Platform.select({});

type Props = {};
export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.placeText}>
          <TextInput
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            placeholder="Place Name"
            style={styles.placeInput}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20
  },
  placeText: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    width: "100%"
  },
  placeInput: {
    width: "70%",
    backgroundColor: "#c0effd"
  },
  placeButton: {
    width: "30%"
  }
});
