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
    <Animated.View style={{...styles.container, opacity: opacAnim}}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={props.icon}
          color={VehoColors.icon}
          size={30}
        />
      </View>
      <TouchableOpacity style={styles.touchable} onPress={props.showModal}>
        <Animated.View
          style={{
            ...styles.bar,
            backgroundColor: VehoColors.background,
            elevation: 3,
            width: widthAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "90%"],
            }),
          }}
        >
          <LinearGradient
            colors={[VehoColors.blue, VehoColors.purple, VehoColors.pink]}
            locations={[0.0, 0.5, 0.8]}
            style={{ ...styles.progress, width: props.progress }}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}
          >
            <Text style={styles.co2}>{props.co2}</Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 6,
  },
  touchable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconContainer: {
    height: 40,
    width: 40,
    marginLeft: 25,
    borderRadius: 100,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: VehoColors.blue,
  },
  co2: {
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    textAlignVertical: "center",
    justifyContent: "center",
    padding: 10,
    color: VehoColors.white,
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
