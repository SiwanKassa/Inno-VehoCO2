import React from "react";
import { View, StyleSheet } from "react-native";
import VehoColors from "../screens/VehoColors";

const VehoDetailContainer = (props) => {
return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "93%",
    height: "95%",
    borderRadius: 20,
    backgroundColor: VehoColors.secondary,
    elevation: 10,
  }
});

export default VehoDetailContainer;