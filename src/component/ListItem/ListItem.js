import React from "react ";
import { View, Text, StyleSheet } from "react-native";

const listItem = props => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#eee",
    width: "100%",
    padding: 10
  }
});

export default listItem;
