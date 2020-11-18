import React, {useState,useEffect} from 'react';
import styles from './MainViesStyle.js';
import {inject, observer} from 'mobx-react';
import { Text, View } from 'react-native';
import {VictoryPie, VictoryLabel} from 'victory-native'
import Svg from 'react-native-svg'
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

function MainViewScreen(props) {

    /*state for holding the graph data*/
    const [graphicData, setGraphicData] = useState([0,0]);
    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

/*function for adding the updated data to state when the component renders*/
    useEffect(() => {
        console.log(parseInt(props.store.drivingDataStore.ecoScore.value))
        setGraphicData([(parseInt(props.store.drivingDataStore.ecoScore.value)),(100 - parseInt(props.store.drivingDataStore.ecoScore.value))]); // Setting the data that we want to display
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    }, []);

    return(
      /*screen for home/main view*/
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.mainViewHeader}>Today's data breakdown</Text>
        </View>
        <View style={styles.pieContainer}>
    <VictoryPie
        colorScale={["white", "#13265f"]}
        data={graphicData}
        innerRadius={125}
        textRadius={100}
        animate={{ easing: 'exp' }}
        labelComponent={
            <VictoryLabel
                style={{
                    fontSize: 25,
                    fill: "white",
                }}
                x={dimensions.screen.width * 0.5}
                y={dimensions.screen.height *0.23}
                textAnchor="middle"
                verticalAnchor="middle"
                text={props.store.drivingDataStore.ecoScore.value + "/100.0\n  Today's eco-score"
                }
            />
        }
    />
        </View>
        <View style={styles.dataContainer}>
            <View style={styles.dataBox}>
       <Text style={styles.dataText}>{props.store.drivingDataStore.distance.value + " m"}</Text>
                <Text style={styles.dataText}>Distance driven: </Text>
            </View>
                <View style={styles.dataBox}>
        <Text style={styles.dataText}>{props.store.drivingDataStore.avgFuelConsumption.value + " L/100 km"}</Text>
                    <Text style={styles.dataText}>Avg. fuel consumption: </Text>
                </View>
                    <View style={styles.dataBox}>
        <Text style={styles.dataText}>{props.store.drivingDataStore.avgSpeed.value + " km/h"}</Text>
                        <Text style={styles.dataText}>Avg. speed: </Text>
                    </View>
    </View>
    </View>
  );
}
export default inject("store")(observer(MainViewScreen));


