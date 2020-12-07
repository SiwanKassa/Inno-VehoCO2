import React, { useState, useEffect, useRef } from "react";
import styles from "./TodaysViewStyle.js";
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableHighlight,
  Modal,
  Animated
} from "react-native";
import { VictoryPie, VictoryLabel } from "victory-native";
import { inject, observer } from "mobx-react";

import VehoColors from "./../../VehoColors";
import VehoScoreDot from "./../../../components/VehoScoreDot";
import VehoScoreBar from "./../../../components/VehoScoreBar";
import VehoCard from "./../../../components/VehoDetailContainer";
import PieLegend from "./../../../components/PieLegend";
import ShoppingModal from "./../../../components/ShoppingModal";
import { NavigationRouteContext } from "@react-navigation/native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const TodaysViewScreen = (props) => {
  /*state for holding the graph data*/
  const [graphicData, setGraphicData] = useState([0, 0]);
  const [dimensions, setDimensions] = useState({ window, screen });

  let opacAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
      delay: 500,
    }).start();
  }, [opacAnim]);

  const [shoppingModalVisible, setShoppingModalVisible] = useState(false);

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  /*function for adding the updated data to state when the component renders*/
  useEffect(() => {
    console.log(props.store.drivingDataStore);
    setGraphicData([
      parseInt(props.store.drivingDataStore.ecoScore.value),
      100 - parseInt(props.store.drivingDataStore.ecoScore.value),
    ]); // Setting the data that we want to display
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <VehoCard>
        <View style={styles.containerScrollWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.containerScroll}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingModal
              visible={shoppingModalVisible}
              toggleOff={setShoppingModalVisible}
            />

            <Text style={styles.title}>Data from today</Text>
            <Animated.View style={{...styles.pieContainer, opacity: opacAnim}}>
              <VictoryPie
                data={graphicData}
                innerRadius={125}
                textRadius={100}
                padAngle={4}
                colorScale={[VehoColors.blue, VehoColors.pink]}
                animate={{ easing: "exp" }}
                labels={() => ["Eco score\n", props.store.drivingDataStore.ecoScore.value]}
                labelComponent={
                  <VictoryLabel
                    style={[
                      { fill: "white", fontSize: 24 },
                      { fill: "white", fontSize: 46 },
                    ]}
                    x={dimensions.screen.width * 0.5}
                    y={dimensions.screen.height * 0.23}
                    textAnchor="middle"
                    verticalAnchor="middle"
                    text={`Eco score \n${props.store.drivingDataStore.ecoScore.value}`}
                  />
                }
              ></VictoryPie>
            </Animated.View>

            <Animated.View style={{...styles.dotContainer, opacity: opacAnim}}>
              <VehoScoreDot
                text="Current emissions"
                value={82}
                color={VehoColors.blue}
              />
              <VehoScoreDot
                text="Todays target"
                value={74}
                color={VehoColors.purple}
              />
              <VehoScoreDot
                text="Yesterdays emissions"
                value={99}
                color={VehoColors.pink}
              />
            </Animated.View>

            <Animated.View style={{...styles.barContainer, opacity: opacAnim}}>
              <VehoScoreBar
                progress={`${props.store.drivingDataStore.ecoScore.value}%`}
                co2={props.store.drivingDataStore.ecoScore.value}
                showModal={() => props.navigation.navigate('Combined')}
                icon="car"
              />
              <VehoScoreBar
                progress={"36%"}
                co2={22}
                icon="cart"
                showModal={() => setShoppingModalVisible(true)}
              />
              <VehoScoreBar progress={"63%"} co2={43} icon="flash" />
              <View style={styles.disclaimerContainer}>
                <Text style={styles.co2Disclaimer}>* kg of CO2</Text>
              </View>
            </Animated.View>

            <View style={styles.dataContainer}>
              <View style={styles.dataBox}>
                <Text style={styles.dataText}>
                  {props.store.drivingDataStore.distance.value + " m"}
                </Text>
                <Text style={styles.dataText}>Distance driven: </Text>
              </View>
              <View style={styles.dataBox}>
                <Text style={styles.dataText}>
                  {props.store.drivingDataStore.avgFuelConsumption.value +
                    " L/100 km"}
                </Text>
                <Text style={styles.dataText}>Avg. fuel consumption: </Text>
              </View>
              <View style={styles.dataBox}>
                <Text style={styles.dataText}>
                  {props.store.drivingDataStore.avgSpeed.value + " km/h"}
                </Text>
                <Text style={styles.dataText}>Avg. speed: </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </VehoCard>
    </View>
  );
};

export default inject("store")(observer(TodaysViewScreen));
