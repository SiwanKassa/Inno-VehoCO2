import React, { Component, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import { TextSize } from "victory-native";
import VehoColors from "../screens/VehoColors";

const VehoScoreDot = (props) => {
  let opacAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opacAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 500,
    }).start();
  }, [opacAnim]);

  return (
    <Animated.View style={{ ...styles.container, opacity: opacAnim }}>
      <View>
        <View style={{ ...styles.dot, backgroundColor: props.color }}>
          <Text style={styles.value}>{Math.round(props.value)}</Text>
        </View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    height: 40,
    width: 40,
    borderRadius: 100,
    elevation: 3,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: VehoColors.white,
  },
  text: {
    color: VehoColors.white,
    textAlign: "center",
    width: 70,
  },
  value: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: VehoColors.white,
  },
});

export default VehoScoreDot;
