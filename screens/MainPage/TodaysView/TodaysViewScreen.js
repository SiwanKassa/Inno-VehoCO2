import React, { useState, useEffect } from "react";
import styles from "./TodaysViewStyle.js";
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableHighlight,
  Modal,
} from "react-native";
import { VictoryPie, VictoryLabel } from "victory-native";
import { inject, observer } from "mobx-react";

import VehoColors from "./../../VehoColors";
import VehoScoreDot from "./../../../components/VehoScoreDot";
import VehoScoreBar from "./../../../components/VehoScoreBar";
import VehoCard from "./../../../components/VehoDetailContainer";
import ShoppingModal from './../../../components/ShoppingModal'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const TodaysViewScreen = (props) => {
  /*state for holding the graph data*/
  const [graphicData, setGraphicData] = useState([0, 0]);
  const [dimensions, setDimensions] = useState({ window, screen });

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
            <ShoppingModal visible={shoppingModalVisible} toggleOff={setShoppingModalVisible}/>

            <Text style={styles.title}>Data from today</Text>
            <View style={styles.pieContainer}>
              <VictoryPie
                colorScale={["white", "#13265f"]}
                data={graphicData}
                innerRadius={125}
                textRadius={100}
                animate={{ easing: "exp" }}
                labelComponent={
                  <VictoryLabel
                    style={{
                      fontSize: 25,
                      fill: "white",
                    }}
                    x={dimensions.screen.width * 0.5}
                    y={dimensions.screen.height * 0.23}
                    textAnchor="middle"
                    verticalAnchor="middle"
                    text={
                      props.store.drivingDataStore.ecoScore.value +
                      "/100.0\n  Today's eco-score"
                    }
                  />
                }
              />
            </View>

            <View style={styles.dotContainer}>
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
            </View>

            <View style={styles.barContainer}>
              <VehoScoreBar
                progress={`${props.store.drivingDataStore.ecoScore.value}%`}
                co2={props.store.drivingDataStore.ecoScore.value}
                icon="car"
              />
              <VehoScoreBar
                progress={"36%"}
                co2={22}
                icon="cart"
                showModal={() => setShoppingModalVisible(true)}
              />
              <VehoScoreBar progress={"63%"} co2={43} icon="food-fork-drink" />
              <View style={styles.disclaimerContainer}>
                <Text style={styles.co2Disclaimer}>* kg of CO2</Text>
              </View>
            </View>

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
