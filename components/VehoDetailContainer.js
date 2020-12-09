import React from "react";
import { View, StyleSheet } from "react-native";
import VehoColors from "../screens/VehoColors";
import { LinearGradient } from "expo-linear-gradient";

const VehoDetailContainer = (props) => {
return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: "95%",
    height: "93%",
    borderRadius: 20,
    backgroundColor: VehoColors.card,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow:'hidden',
  }
});

export default VehoDetailContainer;
