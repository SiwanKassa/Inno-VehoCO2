import React from "react";
import { View, StyleSheet } from "react-native";
import VehoColors from "../screens/VehoColors";

/**
 * Used to wrap the tab-views with the same container. Passes all the child-views inside itself
 */

const VehoDetailContainer = (props) => {
return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "93%",
    borderRadius: 20,
    backgroundColor: VehoColors.card,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow:'hidden',
    marginTop: 25,
  }
});

export default VehoDetailContainer;
