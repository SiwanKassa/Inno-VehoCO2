import React from "react";
import { View, StyleSheet } from "react-native";
import VehoColors from "../screens/VehoColors";

const VehoDetailContainer = (props) => {
return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "93%",
    height: "90%",
    borderRadius: 20,
    backgroundColor: VehoColors.card,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default VehoDetailContainer;
