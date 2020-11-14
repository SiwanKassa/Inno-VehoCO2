import React, {useState,useEffect} from 'react';
import styles from './MainViesStyle.js';
import {inject, observer} from 'mobx-react';
import { Text, View } from 'react-native';
import {VictoryPie, VictoryLabel} from 'victory-native'

function MainViewScreen(props) {

    /*state for holding the graph data*/
    const [graphicData, setGraphicData] = useState([0,0]);

/*function for adding the updated data to state when the component renders*/
    useEffect(() => {
        setGraphicData([parseInt(props.store.drivingDataStore.ecoScore),(100 - parseInt(props.store.drivingDataStore.ecoScore))]); // Setting the data that we want to display
    }, []);
    return(
      /*screen for home/main view*/
    <View style={styles.container}>
    <VictoryPie
        standalone={true}
        colorScale={["white", "black"]}
    data={graphicData}
        innerRadius={95}
        labelRadius={100}
        animate={{ easing: 'exp' }}
        labelComponent={
            <VictoryLabel
                verticalAnchor="middle"
            style={{
                fontSize: 30,
                color: "black"

            }}
            x={180} y={180}
            text={props.store.drivingDataStore.ecoScore+ "/100.0"}
        />}
    />

      <Text style={styles.title}>Today's eco-score</Text>
{/*        <Text>{props.store.drivingDataStore.distance}</Text>
        <Text>{props.store.drivingDataStore.avgFuelConsumption}</Text>
        <Text>{props.store.drivingDataStore.avgSpeed}</Text>
        <Text>{props.store.drivingDataStore.ecoScore}</Text>*/}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
export default inject("store")(observer(MainViewScreen));


