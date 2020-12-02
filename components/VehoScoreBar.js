import React, { Component, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import VehoColors from "../screens/VehoColors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const VehoScoreDot = (props) => {
  let widthAnim = useRef(new Animated.Value(0)).current;
  let opacAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      delay: 500,
    }).start();

    Animated.timing(opacAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 500,
    }).start();
  }, [opacAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={props.icon}
          color={VehoColors.background}
          size={40}
        />
      </View>
      <Animated.View
        style={{
          ...styles.bar,
          backgroundColor: VehoColors.input,
          width: widthAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "85%"],
          }),
          opacity: opacAnim
        }}
      >
        <LinearGradient
          colors={[VehoColors.blue, VehoColors.purple, VehoColors.pink]}
          locations={[0.0, 0.5, 0.8]}
          style={{ ...styles.progress, width: props.progress }}
          start={[0.0, 0.0]}
          end={[1.0, 1.0]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 6,
  },
  iconContainer: {
    height: 50,
    width: 50,
    marginLeft: 25,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: VehoColors.blue,
  },
  bar: {
    width: "100%",
    height: 40,
    marginHorizontal: 10,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: VehoColors.white,
  },
  progress: {
    backgroundColor: VehoColors.input,
    height: 40,
    borderRadius: 100,
    position: "absolute",
    flexDirection: "row",
  },
  text: {
    color: VehoColors.white,
    textAlign: "center",
    width: 70,
  },
});

export default VehoScoreDot;
