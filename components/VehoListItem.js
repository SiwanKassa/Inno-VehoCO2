import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import VehoColors from "../screens/VehoColors";

const VehoListItem = (props) => {
  const [ecoColor, setEcoColor] = useState("#ffffff");
  const [selected, setSelected] = useState(true);

  const handleClick = (event) => {
    setSelected(!selected);
  };

  const parseDate = (itemDate) => {
    const date = new Date(itemDate);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getUTCMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${dd}.${mm}.${yyyy} ${hours}:${minutes}`;
  };

  const parseEcoScore = (score) => {
    score = Math.round(score);
    return score;
  };

  const parseColor = (score) => {
      if (score < 50) {
          return VehoColors.red
      } else if (score < 79) {
          return VehoColors.yellow
      } else {
          return VehoColors.green
      }
  }

  if (selected) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={handleClick}
        activeOpacity={1}
      >
        <View style={styles.itemContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              {parseDate(props.item.startTimestamp)}
            </Text>
          </View>
          <View style={styles.ecoContainer}>
            <Text style={{ ...styles.eco, color: parseColor(props.item.attributes[3].value)}}>
              {parseEcoScore(props.item.attributes[3].value)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={handleClick}
        activeOpacity={1}
      >
        <View style={expandedStyles.expanded}>
          <View style={expandedStyles.keyValueContainer}>
            <Text style={expandedStyles.key}>Time</Text>
            <Text style={expandedStyles.value}>
              {parseDate(props.item.startTimestamp)}
            </Text>
          </View>
          <View style={expandedStyles.keyValueContainer}>
            <Text style={expandedStyles.key}>Starting location</Text>
            <Text style={expandedStyles.value}>
              {props.item.startAddress.formattedAddress}
            </Text>
          </View>

          <View style={expandedStyles.keyValueContainer}>
            <Text style={expandedStyles.key}>Destination</Text>
            <Text style={expandedStyles.value}>
              {props.item.endAddress.formattedAddress}
            </Text>
          </View>

          <View style={expandedStyles.keyValueContainer}>
            <Text style={expandedStyles.key}>Distance driven</Text>
            <Text style={expandedStyles.value}>
              {props.item.attributes[0].value / 1000} km
            </Text>
          </View>

          <View style={expandedStyles.keyValueContainer}>
            <Text style={expandedStyles.key}>Avg fuel consumption</Text>
            <Text style={expandedStyles.value}>
              {props.item.attributes[1].value} l/100km
            </Text>
          </View>

          <View style={expandedStyles.keyValueContainer}>
            <Text style={expandedStyles.key}>Eco score</Text>
            <Text style={{ ...expandedStyles.valueBold, color: parseColor(props.item.attributes[3].value)}}>
              {parseEcoScore(props.item.attributes[3].value)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 5,
  },
  itemContainer: {
    height: 60,
    width: "95%",
    borderRadius: 15,
    backgroundColor: VehoColors.card,
    elevation: 10,
    flexDirection: "row",
  },
  expanded: {
    width: "95%",
    borderRadius: 15,
    backgroundColor: VehoColors.primary,
    elevation: 10,
    flexDirection: "row",
  },
  date: {
    fontSize: 20,
    paddingLeft: 10,
    color: "#ffffff",
  },
  eco: {
    fontSize: 26,
    fontWeight: "bold",
    paddingRight: 10,
    color: "#ffffff",
  },
  dateContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
  },
  ecoContainer: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
  },
});

const expandedStyles = StyleSheet.create({
  expanded: {
    alignSelf: "center",
    width: "95%",
    borderRadius: 15,
    backgroundColor: VehoColors.input,
    elevation: 10,
    paddingVertical: 12,
  },
  keyValueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8,
  },
  key: {
    width: "30%",
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  value: {
    width: "65%",
    color: "#ffffff",
    fontSize: 20,
    paddingRight: 10,
    textAlign: "right",
  },
  valueBold: {
    width: "65%",
    color: "#ffffff",
    fontSize: 24,
    paddingRight: 10,
    textAlign: "right",
    fontWeight: "bold",
  },
});

export default VehoListItem;
