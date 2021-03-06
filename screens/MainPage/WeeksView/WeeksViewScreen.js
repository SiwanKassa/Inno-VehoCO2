import React, { useState, useEffect } from "react";
import styles from "./WeeksViewStyle.js";
import { Text, View, Dimensions, Button, TouchableOpacity } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  LineSegment,
  VictoryLabel,
} from "victory-native";
import { inject, observer } from "mobx-react";
import VehoDetailContainer from "./../../../components/VehoDetailContainer";
import VehoColors from "../../VehoColors";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const WeeksViewScreen = (props) => {
    /*state for holding the graph data*/
    const [graphicData, setGraphicData] = useState([0, 0]);
    //state for screen dimensions
    const [dimensions, setDimensions] = useState({ window, screen });
    //state for handling what data is shown in the graph
    const [shownData, setShownData] = useState(0);
    //state for handling the graph header
    const [chartLabelY, setChartLabelY] = useState("Distance (km)")

//function for updating the screen dimensions
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
//function for updating the data shown in the graph
    const updateData=(num)=>{
        setShownData(num)
        setGraphicData([])
        props.store.drivingDataStore.dummyData.tripSummaries.map((item,key)=>{
            /*[0]=distance, [1] avgFuelConsumption, [2] avg speed, [3] ecoScore */

      let value;
      const date = new Date(item.startTimestamp);
      const usableDate = date.getDate() + "/" + (date.getMonth() + 1);

      if (num === 0) {
        value = item.attributes[num].value / 1000;
        setChartLabelY("Distance (km)");
      }
      if (num === 1) {
        value = item.attributes[num].value;
        setChartLabelY(" Avg fuel consumption (l/100 km)");
      }
      if (num === 2) {
        value = Math.round(item.attributes[num].value);
        setChartLabelY("Avg speed (km/h)");
      }
      if (num === 3) {
        value = item.attributes[num].value;
        setChartLabelY("Eco score (%)");
      }
      setGraphicData((graphicData) => [
        ...graphicData,
        { x: usableDate, y: value },
      ]);
    });
  };
  /*function for adding the updated data to state when the component renders*/
  useEffect(() => {
    updateData(shownData);
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <VehoDetailContainer>
        <Text style={styles.title}>Data from the past 9 days</Text>
        <View style={styles.chartContainer}>
          <Text style={styles.chartHeader}>{chartLabelY}</Text>
          <VictoryChart
            fixLabelOverlap={true}
            domainPadding={{ x: 20 }}
            width={dimensions.screen.width * 0.95}
          >
            <VictoryBar
              fixLabelOverlap={true}
              barRatio={1}
              data={graphicData}
              style={{
                data: {
                  fill: VehoColors.pink,
                  stroke: "black",
                  strokeWidth: 0,
                  color: "white",
                },
              }}
              labelComponent={<VictoryLabel dy={30} />}
            />
            <VictoryAxis fixLabelOverlap={true} style={{
                tickLabels: {fill: 'white'},
             }}  />
            <VictoryAxis
              dependentAxis
              fixLabelOverlap={true}
              style={{ color: "white" }}
              style={{
                tickLabels: {fill: 'white'},
             }}
            />
          </VictoryChart>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Distance"
            style={styles.button}
            onPress={() => updateData(0)}
          >
            <Text style={styles.buttonText}> Distance </Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Avg fuel consumption"
            style={styles.button}
            onPress={() => updateData(1)}
          >
            <Text style={styles.buttonText}> Avg (l/100 km) </Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Avg Speed"
            style={styles.button}
            onPress={() => updateData(2)}
          >
            <Text style={styles.buttonText}> Avg speed </Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="Eco Score"
            style={styles.button}
            onPress={() => updateData(3)}
          >
            <Text style={styles.buttonText}>Eco score</Text>
          </TouchableOpacity>
        </View>
      </VehoDetailContainer>
    </View>
  );
};

export default inject("store")(observer(WeeksViewScreen));
